import { HiDotsVertical } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import { ColorRing } from "react-loader-spinner";

const UserList = () => {
   const [loading, setLoading] = useState(true);
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
         setLoading(false)
      });
   }, [])
   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>User List</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto relative'>

               {
                  loading ?
                     <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] z-20">
                        <ColorRing
                           visible={true}
                           height="60"
                           width="60"
                           ariaLabel="blocks-loading"
                           wrapperStyle={{}}
                           wrapperClass="blocks-wrapper"
                           colors={["#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5"]}
                        />
                     </div> :
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-0 md:mr-10'>
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