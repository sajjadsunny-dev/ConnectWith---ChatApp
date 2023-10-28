import Sidebar from './../../components/Sidebar/Sidebar';
import GroupList from './../../components/GroupList/GroupList';
import Friends from './../../components/Friends/Friends';
import UserList from './../../components/UserList/UserList';
import FriendRequest from './../../components/FriendRequest/FriendRequest';
import MyGroups from './../../components/MyGroups/MyGroups';
import BlockList from './../../components/BlockList/BlockList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SearchBox from './../../components/SearchBox/SearchBox';
import { userLoginInfo } from '../../slices/userSlice';
import { ColorRing } from "react-loader-spinner";
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

const Home = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const data = useSelector(state => state.userLoginInfo.userInfo)
   const [verify, setVerify] = useState(false);
   const [loading, setLoading] = useState(true);
   const auth = getAuth();

   useEffect(() => {
      if (!data) {
         setTimeout(() => {
            navigate('/sign-in')
         }, 500);
      } else {
         onAuthStateChanged(auth, (user) => {
            if (user.emailVerified) {
               setTimeout(() => {
                  setLoading(false)
               }, 500);
               setVerify(true)
               dispatch(userLoginInfo(user));
               localStorage.setItem('userLoginInfo', JSON.stringify((user)))
            } else {
               setLoading(false)
            }
         });
      }
   })

   const handleLogOut = () => {
      signOut(auth).then(() => {
         dispatch(userLoginInfo(null));
         localStorage.removeItem('userLoginInfo');
         navigate('/sign-in');
      }).catch(() => {
      });
   }

   return (
      <>
         {
            loading ? (
               <div className="flex justify-center items-center h-screen">
                  <ColorRing
                     visible={true}
                     height="120"
                     width="120"
                     ariaLabel="blocks-loading"
                     wrapperStyle={{}}
                     wrapperClass="blocks-wrapper"
                     colors={["#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5"]}
                  />
               </div>
            ) : verify ? (
               <section className="h-screen pt-20 p-2.5 md:p-5 md:grid grid-cols-9 gap-10">

                  <div className="fixed top-0 left-0 z-[100] w-full md:hidden">
                     <div className="p-3 bg-white flex justify-center relative">
                        <div className="absolute top-1/2 left-[12px] translate-y-[-50%]">
                           <HamburgerMenu />
                        </div>
                        <h2 className="font-pacifico text-3xl text-themeColor">ConnectWith</h2>
                     </div>
                  </div>

                  <div className="md:h-full col-span-1 fixed md:static w-full left-0 bottom-0 z-[70]">
                     <Sidebar />
                  </div>

                  <div className="w-full h-full md:col-span-8 flex flex-wrap justify-between content-between">

                     {/* Group List */}
                     <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px]">
                        <div className="h-full flex flex-col justify-between">
                           <SearchBox />
                           <GroupList />
                        </div>
                     </div>

                     {/* Friends */}
                     <Friends />

                     {/* User List */}
                     <UserList />

                     {/* Friend Request */}
                     <FriendRequest />

                     {/* My Groups */}
                     <MyGroups />

                     {/* Blocked Users */}
                     <BlockList />
                  </div>
               </section>
            )
               : (
                  <div className="h-screen bg-themeColor flex flex-col justify-center items-center">
                     <h1 className="font-nunito text-[85px] text-white font-bold mb-5">Please Verify Your Email</h1>
                     <button onClick={handleLogOut} className='py-5 px-7 font-nunito text-xl text-black font-semibold text-center bg-white rounded-[9px] hover:text-white hover:bg-[#FF9A00] duration-300' type="button">Go Back to Login</button>
                  </div>
               )
         }
      </>
   )
}

export default Home