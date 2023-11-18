import { HiDotsVertical } from 'react-icons/hi';

const BlockList = () => {
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
                  <div className="mr-0 md:mr-6">
                     <button className='font-poppins text-sm md:text-lg font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Unblock</button>
                  </div>
               </li>

            </ul>
         </div>
      </>
   )
}

export default BlockList