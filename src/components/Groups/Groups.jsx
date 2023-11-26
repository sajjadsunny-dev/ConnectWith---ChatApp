import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ColorRing } from 'react-loader-spinner';

const Groups = () => {
   const db = getDatabase();
   const data = useSelector(state => state.userLoginInfo.userInfo);
   const [groups, setGroups] = useState([]);
   const [preLoad, setPreLoad] = useState(true);

   useEffect(() => {
      const groupRef = ref(db, 'groups/');
      onValue(groupRef, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            if (data.uid == item.val().creatorid) {
               arr.push({ ...item.val(), key: item.key })
            }
         })
         setGroups(arr)
         setPreLoad(false)
      });
   }, [db, data])

   return (
      <>
         <div className='h-[87%] md:h-[77%] pt-3 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow'>
            <div className='flex justify-between mb-1'>
               <h3 className='font-poppins text-xl font-semibold'>Groups</h3>
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
                           groups.length == 0
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
                                    groups.map((item, i) => (
                                       <li key={i} className='py-3 md:pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040] cursor-pointer'>
                                          <div className="flex items-center">
                                             <img className='w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full mr-2 md:mr-3.5' src="images/group-lists/g1.png" alt="g1.png" />
                                             <div className=''>
                                                <h5 className='font-poppins text-base md:text-[18px] font-semibold capitalize'>{item.groupname}</h5>
                                                <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF] capitalize'>{item.groupabout}</p>
                                             </div>
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

export default Groups