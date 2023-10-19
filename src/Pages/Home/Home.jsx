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
               <section className="h-screen px-5 py-5 grid grid-cols-9 gap-10">
                  <div className="h-full col-span-1">
                     <Sidebar />
                  </div>

                  <div className="w-full col-span-8 flex flex-col">

                     <div className="flex justify-between h-[50%] w-full">
                        {/* Group List */}
                        <div className=" w-[32%] h-[355px] flex flex-col justify-between">
                           <SearchBox />
                           <GroupList />
                        </div>

                        {/* Friends */}
                        <Friends />

                        {/* User List */}
                        <UserList />
                     </div>

                     <div className="flex justify-between items-end h-[50%] w-full">
                        {/* Friend Request */}
                        <FriendRequest />

                        {/* My Groups */}
                        <MyGroups />

                        {/* Blocked Users */}
                        <BlockList />
                     </div>
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