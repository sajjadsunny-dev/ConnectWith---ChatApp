import { HiDotsVertical } from 'react-icons/hi';
import CreateGroupModal from './../modals/CreateGroupModal/CreateGroupModal';
import { useRef } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ColorRing } from 'react-loader-spinner';

const GroupList = () => {
   const groupModal = useRef();
   const groupModalForm = useRef();

   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [allGroupList, setAllGroupList] = useState([]);
   const [preLoad, setPreLoad] = useState(true)

   const createGroupModal = () => {
      groupModal.current.classList.remove('hidden')
      setTimeout(() => {
         groupModalForm.current.classList.remove('scale-0')
      }, 100);
   }

   useEffect(() => {
      const groupRef = ref(db, 'groups/');
      onValue(groupRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (data.uid != item.val().creatorid) {
               arr.push({ ...item.val(), key: item.key })
            }
         })
         setAllGroupList(arr)
         setPreLoad(false)
      });
   }, [db, data])

   return (
      <>
         <div className='h-[87%] md:h-[77%] pt-3 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow'>
            <div className='flex justify-between mb-1 pb-.5'>
               <h3 className='font-poppins text-xl font-semibold'>Groups List</h3>
               <div className='flex items-center'>
                  <button onClick={createGroupModal} className='font-poppins text-sm md:text-base font-semibold text-white py-1 px-3.5 md:px-4.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300 mr-1'>Create Group</button>

                  <HiDotsVertical className="text-lg md:text-2xl cursor-pointer text-themeColor" />
               </div>
            </div>

            <CreateGroupModal groupModal={groupModal} groupModalForm={groupModalForm} />

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
                           allGroupList.length == 0
                              ?
                              <div className="h-full w-full grid place-items-center">
                                 <div className="mb-10 md:mb-14 opacity-30">
                                    <h4 className="font-poppins text-lg font-semibold capitalize text-center select-none">No Groups Found</h4>
                                    <p className="font-poppins text-sm font-medium text-[#4D4D4DBF] text-center w-56 mx-auto mt-1 select-none">All available groups will appear here.</p>
                                 </div>
                              </div>
                              :
                              <>
                                 {
                                    allGroupList.map((item, i) => (
                                       <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                                          <div className="flex items-center">
                                             <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                                                <img className='w-[54px] h-[54px] bg-slate-100 rounded-full object-cover' src="images/group-lists/g1.png" alt="" />
                                             </div>
                                             <div className=''>
                                                <h5 className='font-poppins text-sm font-semibold capitalize'>
                                                   {item.groupname}
                                                </h5>
                                                <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>
                                                   {item.groupabout}
                                                </p>
                                             </div>
                                          </div>
                                          <div className="">
                                             <button className='font-poppins text-sm md:text-lg font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Join</button>
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

export default GroupList