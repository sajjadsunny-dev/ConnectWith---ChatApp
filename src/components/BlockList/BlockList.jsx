import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ColorRing } from 'react-loader-spinner';

const BlockList = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [blockList, setBlockList] = useState([]);

   const [preLoad, setPreLoad] = useState(true)

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
         setPreLoad(false)
      });
   }, [db, data])

   const unblockUser = (item) => {
      remove(ref(db, 'block/' + item.id))
   }

   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Block List</h3>
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
                           blockList.length == 0
                              ?
                              <div className="h-full w-full grid place-items-center">
                                 <div className="mb-10 md:mb-14 opacity-30">
                                    <h4 className="font-poppins text-lg font-semibold capitalize text-center select-none">No Blocked Users Found</h4>
                                    <p className="font-poppins text-sm font-medium text-[#4D4D4DBF] text-center w-44 mx-auto mt-1 select-none">Your blocked users will appear here.</p>
                                 </div>
                              </div>
                              :
                              <>
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
                              </>
                        }
                     </>
               }





            </ul>
         </div>
      </>
   )
}

export default BlockList