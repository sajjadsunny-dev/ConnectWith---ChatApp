import { HiDotsVertical } from 'react-icons/hi';

const BlockList = () => {
   return (
      <>
         <div className="w-full md:w-[32%] h-full md:h-[290px] lg:h-[305px] 2xl:h-[360px] pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>Block List</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto'>

               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Raghav</h5>
                        <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 8:56pm</h5>
                     </div>
                  </div>
                  <div className="mr-9">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse3.png" alt="Ellipse3.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Swathi</h5>
                        <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 2:31pm</h5>
                     </div>
                  </div>
                  <div className="mr-9">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse4.png" alt="Ellipse4.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Kiran</h5>
                        <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Yesterday, 6:22pm</h5>
                     </div>
                  </div>
                  <div className="mr-9">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse5.png" alt="Ellipse5.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Tejeshwini C</h5>
                        <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 12:22pm</h5>
                     </div>
                  </div>
                  <div className="mr-9">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse1.png" alt="Ellipse1.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Marvin McKinney</h5>
                        <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 8:52pm</h5>
                     </div>
                  </div>
                  <div className="mr-9">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

            </ul>
         </div>
      </>
   )
}

export default BlockList