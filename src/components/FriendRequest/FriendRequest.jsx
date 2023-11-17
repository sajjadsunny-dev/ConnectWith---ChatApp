import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const FriendRequest = () => {
   const db = getDatabase();
   const [friendRequestList, setFriendRequestList] = useState([]);
   const data = useSelector(state => state.userLoginInfo.userInfo);

   useEffect(() => {
      const friendrequestRef = ref(db, 'friendRequest/');
      onValue(friendrequestRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (item.val().receiverid == data.uid) {
               arr.push({ ...item.val(), id: item.key });
            }
         })
         setFriendRequestList(arr)
      });
   }, [data.uid, db])
   const acceptFriend = (item) => {
      set(push(ref(db, 'friends/')), {
         ...item
      }).then(() => {
         remove(ref(db, 'friendRequest/' + item.id))
      })
   }
   return (
      <>
         <div className="w-full h-full pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-2'>
               <h3 className='font-poppins text-xl font-semibold'>Friend Request</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>

            <ul className='eraseBorder h-[88%] overflow-y-auto'>
               {
                  friendRequestList.map((item, i) => (

                     <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                        <div className="flex items-center">
                           <div className="mr-2 md:mr-3.5">
                              <img className='w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full object-cover' src={item.profile_picture} alt="Ellipse2.png" />
                           </div>
                           <div className=''>
                              <h5 className='font-poppins text-base md:text-lg font-semibold'>{item.sendername}</h5>
                              <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF] mt-0.5'>Dinner?</p>
                           </div>
                        </div>
                        <div className="mr-0 xl:mr-9">
                           <button onClick={() => acceptFriend(item)} className='font-poppins text-sm md:text-lg font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                        </div>
                     </li>
                  ))
               }
            </ul>
         </div>
      </>
   )
}

export default FriendRequest