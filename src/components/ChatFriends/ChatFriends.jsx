import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { activeChat } from '../../slices/activeChatSlice';

const ChatFriends = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [myChatFriends, setMyChatFriends] = useState([]);
   const dispatch = useDispatch();
   const [preLoad, setPreLoad] = useState(true);

   useEffect(() => {
      const friendRef = ref(db, 'friends/');
      onValue(friendRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (data.uid == item.val().receiverid || data.uid == item.val().senderid) {
               arr.push({ ...item.val(), key: item.key })
            }
         })
         setMyChatFriends(arr)
         setPreLoad(false)
      });
   }, [db, data])

   const chatWith = (item) => {
      if (item.receiverid == data.uid) {
         dispatch(activeChat({
            status: "single",
            id: item.senderid,
            name: item.sendername,
            profile_dp: item.sender_dp
         }))
      } else {
         dispatch(activeChat({
            status: "single",
            id: item.receiverid,
            name: item.receivername,
            profile_dp: item.receiver_dp
         }))
      }
   }

   return (
      <>
         <div className="w-full h-full pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Friends</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto relative'>
               {/* <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Raghav</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi Guys, Wassup!</p>
                     </div>
                  </div>
                  <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 8:56pm</h5>
               </li> */}
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
                           myChatFriends.length == 0
                              ?
                              <div className="h-full w-full grid place-items-center">
                                 <div className="mb-10 md:mb-14 opacity-30">
                                    <h4 className="font-poppins text-lg font-semibold capitalize text-center select-none">No Friends Yet</h4>
                                    <p className="font-poppins text-sm font-medium text-[#4D4D4DBF] text-center w-44 mx-auto mt-1 select-none">Your added friends will appear here.</p>
                                 </div>
                              </div>
                              :
                              <>
                                 {
                                    myChatFriends.map((item, i) => (
                                       <li onClick={() => chatWith(item)} key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040] cursor-pointer'>
                                          <div className="flex items-center">
                                             <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75]">
                                                <img className='bg-slate-100 w-[54px] h-[54px] rounded-full object-cover' src={data.uid == item.senderid ? item.receiver_dp : item.sender_dp} />
                                             </div>
                                             <div className=''>
                                                <h5 className='font-poppins text-sm font-semibold'>
                                                   {
                                                      data.uid == item.senderid ? item.receivername : item.sendername
                                                   }
                                                </h5>
                                                <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Sure!</p>
                                             </div>
                                          </div>
                                          <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 2:31pm</h5>
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

export default ChatFriends