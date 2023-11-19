import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const BlockList = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [blockList, setBlockList] = useState([]);

   useEffect(() => {
      const blockRef = ref(db, 'block/');
      onValue(blockRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (item.val().blockeduserid == data.uid || item.val().blockedbyid == data.uid) {
               if (item.val().blockeduserid == data.uid) {
                  arr.push({
                     id: item.key,
                     block: item.val().blockedbyname,
                     blockedbyid: item.val().blockedbyid,
                     blocked_dp: item.val().blockedbyphoto,
                  })
               } else {
                  arr.push({
                     id: item.key,
                     block: item.val().blockedusername,
                     blockedid: item.val().blockeduserid,
                     blocked_dp: item.val().blockeduserphoto,
                  })
               }
            }
         })
         setBlockList(arr)
      });
   }, [db, data])

   const unblockUser = (item) => {
      set(push(ref(db, 'friends/')), {
         sendername: item.block,
         senderid: item.blockedid,
         receivername: data.displayName,
         receiverid: data.uid,
         sender_dp: item.blocked_dp,
         receiver_dp: data.photoURL,
      }).then(() => {
         remove(ref(db, 'block/' + item.id))
      })
   }

   return (
      <>
         <div className="w-full h-full pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Block List</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto'>

               {
                  blockList.map((item, i) => (
                     <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                        <div className="flex items-center">
                           <div className="mr-3.5">
                              <img className='w-[54px] h-[54px] rounded-full  object-cover' src={item.blocked_dp} alt="Ellipse2.png" />
                           </div>
                           <div className=''>
                              <h5 className='font-poppins text-sm font-semibold'>{item.block}</h5>
                              <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 8:56pm</h5>
                           </div>
                        </div>
                        <div className="">
                           {
                              !item.blockedbyid ?
                                 <button onClick={() => unblockUser(item)} className='font-poppins text-sm md:text-lg font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                                 :
                                 <h5 className="font-poppins text-[10px] font-medium text-[#00000080] select-none">User blocked you</h5>
                           }

                        </div>
                     </li>
                  ))
               }



            </ul>
         </div>
      </>
   )
}

export default BlockList