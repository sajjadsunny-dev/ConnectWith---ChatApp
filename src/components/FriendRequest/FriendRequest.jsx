import { BsThreeDotsVertical } from 'react-icons/Bs';

const FriendRequest = () => {
   return (
      <>
         <div className="w-[32%] h-[355px] pt-5 pb-3 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-2'>
               <h3 className='font-poppins text-xl font-semibold'>Friend Request</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <BsThreeDotsVertical />
               </div>
            </div>

            <ul className='eraseBorder h-[88%] overflow-y-auto'>
               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Raghav</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Dinner?</p>
                     </div>
                  </div>
                  <div className="mr-14">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                  </div>
               </li>
               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse3.png" alt="Ellipse3.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Swathi</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Sure!</p>
                     </div>
                  </div>
                  <div className="mr-14">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                  </div>
               </li>
               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse4.png" alt="Ellipse4.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Kiran</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi...</p>
                     </div>
                  </div>
                  <div className="mr-14">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                  </div>
               </li>
               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse5.png" alt="Ellipse5.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Tejeshwini C</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>I will call him today.</p>
                     </div>
                  </div>
                  <div className="mr-14">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                  </div>
               </li>
               <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                  <div className="flex items-center">
                     <div className="mr-3.5">
                        <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse1.png" alt="Ellipse1.png" />
                     </div>
                     <div className=''>
                        <h5 className='font-poppins text-sm font-semibold'>Marvin McKinney</h5>
                        <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>I will call him today.</p>
                     </div>
                  </div>
                  <div className="mr-14">
                     <button className='font-poppins text-xl font-semibold text-white px-1.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Accept</button>
                  </div>
               </li>
            </ul>
         </div>
      </>
   )
}

export default FriendRequest