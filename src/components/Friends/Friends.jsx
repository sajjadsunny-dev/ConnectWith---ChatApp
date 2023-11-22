import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { useSelector } from "react-redux";
import { ColorRing } from 'react-loader-spinner';

const Friends = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [myFriend, setMyFriend] = useState([]);
   const [preLoad, setPreLoad] = useState(true)

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
         setPreLoad(false)
      });
   }, [db, data])

   const blockUser = (item) => {
      if (data.uid == item.senderid) {
         set(push(ref(db, 'block/')), {
            blockeduserid: item.receiverid,
            blockedusername: item.receivername,
            blockeduserphoto: item.receiver_dp,
            blockedbyid: item.senderid,
            blockedbyname: item.sendername,
            blockedbyphoto: item.sender_dp,
         }).then(() => {
            remove(ref(db, 'friends/' + item.key))
         })
      } else if (data.uid == item.receiverid) {
         set(push(ref(db, 'block/')), {
            blockeduserid: item.senderid,
            blockedusername: item.sendername,
            blockeduserphoto: item.sender_dp,
            blockedbyid: item.receiverid,
            blockedbyname: item.receivername,
            blockedbyphoto: item.receiver_dp,
         }).then(() => {
            remove(ref(db, 'friends/' + item.key))
         })
      }

   }

   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Friends</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto relative'>
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
                           myFriend.length == 0
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
                                    myFriend.map((item, i) => (
                                       <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                                          <div className="flex items-center">
                                             <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                                                <img className='w-[54px] h-[54px] bg-slate-100 rounded-full object-cover' src={data.uid == item.senderid ? item.receiver_dp : item.sender_dp} alt="" />
                                             </div>
                                             <div className=''>
                                                <h5 className='font-poppins text-sm font-semibold capitalize'>
                                                   {
                                                      data.uid == item.senderid ? item.receivername : item.sendername
                                                   }
                                                </h5>
                                                <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi Guys, Wassup!</p>
                                             </div>
                                          </div>
                                          <div className="">
                                             <button onClick={() => blockUser(item)} className='font-poppins text-sm md:text-lg font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Block</button>
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

export default Friends