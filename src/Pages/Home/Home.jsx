import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../components/searchBox/SearchBox';
import GroupList from '../../components/GroupList/GroupList';
import Friends from '../../components/Friends/Friends';
import UserList from '../../components/UserList/UserList';
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import MyGroups from '../../components/MyGroups/MyGroups';
import BlockList from '../../components/BlockList/BlockList';

const Home = () => {
   const navigate = useNavigate()
   const data = useSelector(state => state.userLoginInfo.userInfo)
   useEffect(() => {
      if (!data) {
         navigate('/sign-in')
      }
   })
   return (
      <>
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
      </>
   )
}

export default Home