import { HiDotsVertical } from 'react-icons/hi';

const Groups = () => {
   return (
      <>
         <div className='h-[87%] md:h-[77%] pt-3 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow'>
            <div className='flex justify-between mb-1'>
               <h3 className='font-poppins text-xl font-semibold'>Groups</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[88%] overflow-y-auto'>
               <li className='py-3 md:pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <img className='w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full mr-2 md:mr-3.5' src="images/group-lists/g1.png" alt="g1.png" />
                     <div className=''>
                        <h5 className='font-poppins text-base md:text-[18px] font-semibold'>Friends Reunion</h5>
                        <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
                     </div>
                  </div>
               </li>
               <li className='py-3 md:pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <img className='w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full mr-2 md:mr-3.5' src="images/group-lists/g2.png" alt="g2.png" />
                     <div className=''>
                        <h5 className='font-poppins text-base md:text-[18px] font-semibold'>Friends Reunion</h5>
                        <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
                     </div>
                  </div>
               </li>
               <li className='py-3 md:pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <img className='w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full mr-2 md:mr-3.5' src="images/group-lists/g3.png" alt="g3.png" />
                     <div className=''>
                        <h5 className='font-poppins text-base md:text-[18px] font-semibold'>Friends Reunion</h5>
                        <p className='font-poppins text-xs md:text-base font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </>
   )
}

export default Groups