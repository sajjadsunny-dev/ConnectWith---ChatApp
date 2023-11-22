import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';

const FriendRequest = () => {
   const db = getDatabase();
   const [friendRequestList, setFriendRequestList] = useState([]);
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [preLoad, setPreLoad] = useState(true)

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
         setPreLoad(false)
      });
   }, [data, db])

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

            <ul className='eraseBorder h-[88%] overflow-y-auto relative'>
               {
                  preLoad
                     ?
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
                     </div>
                     :
                     <>
                        {
                           friendRequestList.length == 0
                              ?
                              <div className="h-full w-full grid place-items-center">
                                 <div className="mb-10 md:mb-14 opacity-40">
                                    <h4 className="font-poppins text-lg font-semibold capitalize text-center select-none">No Friend Requests</h4>
                                    <p className="font-poppins text-sm font-medium text-[#4D4D4DBF] text-center w-44 mx-auto mt-1 select-none">All Friend Requests will appear here.</p>
                                 </div>
                              </div>
                              :
                              <>
                                 {
                                    friendRequestList.map((item, i) => (
                                       <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                                          <div className="flex items-center">
                                             <div className="mr-2 md:mr-3.5">
                                                <img className='w-[60px] md:w-[70px] bg-slate-100 h-[60px] md:h-[70px] rounded-full object-cover' src={item.sender_dp} alt="Ellipse2.png" />
                                             </div>
                                             <div className=''>
                                                <h5 className='font-poppins text-base md:text-lg font-semibold'>{item.sendername}</h5>
                                                <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF] mt-0.5'>Dinner?</p>
                                             </div>
                                          </div>
                                          <div className="">
                                             <button onClick={() => acceptFriend(item)} className='font-poppins text-sm md:text-lg font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                                          </div>
                                       </li>
                                    ))
                                 }
                              </>
                        }
                     </>
               }

            </ul>
         </div>
      </>
   )
}

export default FriendRequest