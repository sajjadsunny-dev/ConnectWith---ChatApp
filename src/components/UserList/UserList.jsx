import { HiDotsVertical } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';

const UserList = () => {
   const db = getDatabase();
   const [userData, setUserData] = useState([])
   useEffect(() => {
      const userRef = ref(db, 'users/')
      onValue(userRef, (snapshot) => {
         const arr = []
         snapshot.forEach((item) => {
            arr.push(item.val());
         })
         setUserData(arr)
      });
   }, [])
   console.log(userData);
   return (
      <>
         <div className=" w-[32%] h-[355px] pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>User List</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto'>

               {
                  userData.map((items) => (
                     <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                        <div className="flex items-center">
                           <div className="mr-3.5">
                              <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                           </div>
                           <div className=''>
                              <h5 className='font-poppins text-sm font-semibold'>{items.username}</h5>
                              <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 8:56pm</h5>
                           </div>
                        </div>
                        <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white'>
                           <FaPlus className='' />
                        </div>
                     </li>
                  ))
               }


            </ul>
         </div>
      </>
   )
}

export default UserList