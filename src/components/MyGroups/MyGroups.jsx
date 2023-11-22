import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ColorRing } from 'react-loader-spinner';

const MyGroups = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [myGroupList, setMyGroupList] = useState([]);
   const [preLoad, setPreLoad] = useState(true)

   useEffect(() => {
      const groupRef = ref(db, 'groups/');
      onValue(groupRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (data.uid == item.val().creatorid) {
               arr.push({ ...item.val(), key: item.key })
            }
         })
         setMyGroupList(arr)
         setPreLoad(false)
      });
   }, [db, data])

   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] pt-5 pb-1.5 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-2'>
               <h3 className='font-poppins text-xl font-semibold'>My Groups</h3>
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
                           myGroupList.length == 0
                              ?
                              <div className="h-full w-full grid place-items-center">
                                 <div className="mb-10 md:mb-14 opacity-30">
                                    <h4 className="font-poppins text-lg font-semibold capitalize text-center select-none">No Groups Found</h4>
                                    <p className="font-poppins text-sm font-medium text-[#4D4D4DBF] text-center w-56 mx-auto mt-1 select-none">Your joined or created groups will appear here.</p>
                                 </div>
                              </div>
                              :
                              <>
                                 {
                                    myGroupList.map((item, i) => (
                                       <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                                          <div className="flex items-center">
                                             <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                                                <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                                             </div>
                                             <div className=''>
                                                <h5 className='font-poppins text-sm font-semibold capitalize'>{item.groupname}</h5>
                                                <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5 capitalize'>{item.groupabout}</p>
                                             </div>
                                          </div>
                                          <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 8:56pm</h5>
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

export default MyGroups