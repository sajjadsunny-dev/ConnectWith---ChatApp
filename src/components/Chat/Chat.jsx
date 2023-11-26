import { HiDotsVertical } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import { BsFillEmojiLaughingFill, BsFillCameraFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import defaultImg from '/images/profilePhoto.png';
import { useState } from 'react';
import { getDatabase, ref, set, push } from "firebase/database";

const Chat = () => {
   const db = getDatabase();
   const activeChat = useSelector(state => state.activeChatSlice.active);
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [message, setMessage] = useState('');

   const sendYourMsg = () => {
      if (activeChat.status == 'single') {
         set(push(ref(db, 'userMessage/')), {
            message: message,
            msgSenderId: data.uid,
            msgSenderName: data.displayName,
            msgReceiverId: activeChat.id,
            msgReceiverName: activeChat.name,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}, ${new Date().getHours()}-${new Date().getMinutes()}`
         });
         setMessage('')
      } else {
         console.log('grp');
      }
   }

   return (
      <>
         <div className="w-full h-full rounded-custom shadow-homeCardShadow pl-12 pr-7 grid grid-rows-13">
            {/* receiver identity */}
            <div className="row-span-2 flex items-center justify-between border-b-[1px] border-solid border-[#00000040]">
               <div className="flex items-center">
                  <div className=" inline-block relative mr-3.5 after:content-[''] after:h-[17px] after:w-[17px] after:bg-[#00FF75] after:absolute after:bottom-0.5 after:right-0.5 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                     <img className='w-[75px] h-[75px] rounded-full bg-slate-100 object-cover drop-shadow-navIconDropShadow' src={activeChat?.profile_dp ? activeChat.profile_dp : defaultImg} alt="" />
                  </div>
                  <div className="ml-8">
                     {/* <h2 className="font-poppins text-2xl font-semibold">{activeChat.active.name}</h2> */}
                     <h2 className="font-poppins text-2xl font-semibold">{activeChat?.name ? activeChat.name : 'user'}</h2>
                     <p className="font-poppins text-sm text-[#000000D9]">Online</p>
                  </div>
               </div>
               <div className='text-3xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            {/* box for read messages */}
            <div className="row-span-9 pt-1.5 pb-2.5">
               <div className="h-[480px] min-h-full max-h-full overflow-y-auto">
                  {/* receiver message */}
                  <div className="mt-5">
                     <h4 className="message inline-block max-w-[85%] py-[13px] px-[27px] rounded-e-10px rounded-t-10px bg-[#F1F1F1] font-poppins text-base font-medium tracking-wide ml-6 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:-translate-x-1/2 before:rounded-[5px] before:border-solid before:border-t-22 before:border-r-22 before:border-b-20 before:border-l-28 before:border-t-transparent before:border-r-transparent before:border-b-[#F1F1F1] before:border-l-transparent">Hello...</h4>
                     <p className="font-poppins text-xs font-medium text-[#00000040] mt-2 select-none">Today, 2:13pm</p>
                  </div>
                  {/* receiver message */}

                  {/* sender message */}
                  <div className="mt-5 flex flex-col items-end">
                     <h4 className="inline-block max-w-[85%] py-[13px] px-[27px] rounded-e-10px rounded-10px bg-themeColor font-poppins text-base font-medium text-white tracking-wide mr-6 relative before:content-[''] before:absolute before:right-0 before:bottom-0 before:translate-x-[20px] before:rounded-[5px] before:border-solid before:border-t-22 before:border-r-22 before:border-b-20 before:border-l-28 before:border-t-transparent before:border-r-transparent before:border-b-themeColor before:border-l-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia corporis obcaecati sequi quidem temporibus!</h4>
                     <h3 className="font-poppins text-xs font-medium text-[#00000040] mt-2 select-none">Today, 2:13pm</h3>
                  </div>
                  {/* sender message */}

                  {/* sender message photo */}
                  <div className="mt-5 flex flex-col items-end">
                     <div className="">
                        <img
                           className="md:w-80 md:h-[27rem] rounded-xl cursor-pointer object-cover"
                           src="images/login.jpg"
                           alt=""
                        />
                     </div>
                     <h3 className="font-poppins text-xs font-medium text-[#00000040] mt-2 select-none">Today, 2:13pm</h3>
                  </div>
                  {/* sender message photo */}

                  {/* receiver message photo */}
                  <div className="mt-5">
                     <div className="">
                        <img
                           className="md:w-80 md:h-[27rem] rounded-xl cursor-pointer object-cover"
                           src="images/login.jpg"
                           alt=""
                        />
                     </div>
                     <h3 className="font-poppins text-xs font-medium text-[#00000040] mt-2 select-none">Today, 2:13pm</h3>
                  </div>
                  {/* receiver message photo */}
               </div>
            </div>
            {/* message input and send button */}
            <div className="row-span-2 flex items-center border-t-[1px] border-solid border-[#00000040]">
               <form className="flex w-full">
                  <div className="relative w-full">
                     <textarea onChange={(e) => setMessage(e.target.value)} className="w-full focus:outline-none rounded-10px h-[60px] py-4 pl-4 pr-24 bg-[#F1F1F1] font-poppins text-lg resize-none" placeholder="Message" value={message}></textarea>
                     <div className="flex items-center absolute top-1/2 right-5 -translate-y-1/2 text-[#00000080]">
                        <BsFillEmojiLaughingFill className="text-[22px] mr-4 cursor-pointer" />
                        <BsFillCameraFill className="text-2xl cursor-pointer" />
                     </div>
                  </div>
                  <button onClick={sendYourMsg} type="button" className="text-lg bg-themeColor text-white w-[60px] h-[60px] flex items-center justify-center rounded-10px ml-5">
                     <FaPaperPlane />
                  </button>
               </form>
            </div>
         </div>
      </>
   )
}

export default Chat