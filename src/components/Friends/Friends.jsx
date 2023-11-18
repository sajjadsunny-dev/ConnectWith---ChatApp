import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { useSelector } from "react-redux";

const Friends = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [myFriend, setMyFriend] = useState([]);
   // console.log('Friend data', data);

   useEffect(() => {
      const friendRef = ref(db, 'friends/');
      onValue(friendRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (data.uid == item.val().receiverid || data.uid == item.val().senderid) {
               arr.push({ ...item.val(), key: item.key })
            }
         })
         setMyFriend(arr)
      });
   }, [db, data])
   // console.log('myFriend', myFriend);

   return (
      <>
         <div className="w-full h-full pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Friends</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto'>
               {
                  myFriend.map((item, i) => (
                     <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                        <div className="flex items-center">
                           <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                              <img className='w-[54px] h-[54px] rounded-full object-cover' src={data.uid == item.senderid ? item.receiver_dp : item.sender_dp} alt="" />
                           </div>
                           <div className=''>
                              <h5 className='font-poppins text-sm font-semibold'>
                                 {
                                    data.uid == item.senderid ? item.receivername : item.sendername
                                 }
                              </h5>
                              <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi Guys, Wassup!</p>
                           </div>
                        </div>
                        <div className="">
                           <button className='font-poppins text-sm md:text-lg font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Block</button>
                        </div>
                     </li>
                  ))
               }

            </ul>
         </div>
      </>
   )
}

export default Friends