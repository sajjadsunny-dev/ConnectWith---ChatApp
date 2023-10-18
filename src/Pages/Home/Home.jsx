import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBox from '../../components/searchBox/SearchBox';
import GroupList from '../../components/GroupList/GroupList';
import Friends from '../../components/Friends/Friends';
import UserList from '../../components/UserList/UserList';
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import MyGroups from '../../components/MyGroups/MyGroups';
import BlockList from '../../components/BlockList/BlockList';
import { userLoginInfo } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Home = () => {
   const navigate = useNavigate()
   const data = useSelector(state => state.userLoginInfo.userInfo)
   useEffect(() => {
      if (!data) {
         navigate('/sign-in')
      }
   })

   const [verify, setVerify] = useState(false);
   const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
      if (user.emailVerified) {
         setVerify(true)
      }
   });

   const dispatch = useDispatch()

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
            verify ?
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
               :
               <div className="h-screen bg-themeColor flex flex-col justify-center items-center">
                  <h1 className="font-nunito text-[85px] text-white font-bold mb-5">Please Verify Your Email</h1>
                  <button onClick={handleLogOut} className='py-5 px-7 font-nunito text-xl text-black font-semibold text-center bg-white rounded-[9px] hover:text-white hover:bg-[#FF9A00] duration-300' type="button">Go Back to Login</button>
               </div>
         }
      </>
   )
}

export default Home