import { BsThreeDotsVertical } from 'react-icons/Bs';
import { BiPlusMedical } from 'react-icons/Bi';
import { LuSearch } from 'react-icons/Lu';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate()
   const data = useSelector(state => state.userLoginInfo.userInfo)
   console.log(data);
   useEffect(() => {
      if (!data) {
         navigate('/*')
      }
   })
   return (
      <>
         <section className="h-screen px-5 py-5 grid grid-cols-9 gap-10">
            <div className="h-full col-span-1">
               <Sidebar></Sidebar>
            </div>

            <div className="w-full col-span-8 flex flex-col justify-between">

               <div className="flex justify-between h-[48%] w-full">
                  {/* Group List */}
                  <div className=" w-[32%] h-full flex flex-col justify-between">

                     <form className='flex justify-between items-center rounded-custom bg-white px-[23px] py-[17px] shadow-homeCardShadow'>
                        <div className="text-2xl cursor-pointer">
                           <LuSearch />
                        </div>
                        <input className='focus:outline-none font-poppins text-base font-medium text-black pl-9 pr-2 w-full' type="text" placeholder='Search' />
                        <div className='text-2xl cursor-pointer text-themeColor'>
                           <BsThreeDotsVertical />
                        </div>
                     </form>

                     <div className='h-[79%] pt-3 pb-3 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow'>
                        <div className='flex justify-between mb-1'>
                           <h3 className='font-poppins text-xl font-semibold'>Groups List</h3>
                           <div className='text-2xl cursor-pointer text-themeColor'>
                              <BsThreeDotsVertical />
                           </div>
                        </div>
                        <ul className='eraseBorder h-[88%] overflow-y-auto'>
                           <li className='py-3 pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                              <div className="flex items-center">
                                 <img className='mr-3.5' src="images/group-lists/g1.png" alt="g1.png" />
                                 <div className=''>
                                    <h5 className='font-poppins text-[18px] font-semibold'>Friends Reunion</h5>
                                    <p className='font-poppins text-base font-medium text-[#4D4D4DBF]'>Hi Guys, Wassup!</p>
                                 </div>
                              </div>
                              <div className="">
                                 <button className='font-poppins text-xl font-semibold text-white px-[22px] py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Join</button>
                              </div>
                           </li>
                           <li className='py-3 pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                              <div className="flex items-center">
                                 <img className='mr-3.5' src="images/group-lists/g2.png" alt="g2.png" />
                                 <div className=''>
                                    <h5 className='font-poppins text-[18px] font-semibold'>Friends Forever</h5>
                                    <p className='font-poppins text-base font-medium text-[#4D4D4DBF]'>Good to see you.</p>
                                 </div>
                              </div>
                              <div className="">
                                 <button className='font-poppins text-xl font-semibold text-white px-[22px] py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Join</button>
                              </div>
                           </li>
                           <li className='py-3 pr-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                              <div className="flex items-center">
                                 <img className='mr-3.5' src="images/group-lists/g3.png" alt="g3.png" />
                                 <div className=''>
                                    <h5 className='font-poppins text-[18px] font-semibold'>Crazy Cousins</h5>
                                    <p className='font-poppins text-base font-medium text-[#4D4D4DBF]'>What plans today?</p>
                                 </div>
                              </div>
                              <div className="">
                                 <button className='font-poppins text-xl font-semibold text-white px-[22px] py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Join</button>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>

                  {/* Friends */}
                  <div className=" w-[32%] h-full pt-5 pb-3 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow">
                     <div className='flex justify-between mb-5'>
                        <h3 className='font-poppins text-xl font-semibold'>Friends</h3>
                        <div className='text-2xl cursor-pointer text-themeColor'>
                           <BsThreeDotsVertical />
                        </div>
                     </div>
                     <ul className='eraseBorder h-[86%] overflow-y-auto'>
                        <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                           <div className="flex items-center">
                              <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75] after:absolute after:bottom-0 after:right-0 after:rounded-full after:border-solid after:border-white after:border-2 after:drop-shadow-navIconDropShadow">
                                 <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse2.png" alt="Ellipse2.png" />
                              </div>
                              <div className=''>
                                 <h5 className='font-poppins text-sm font-semibold'>Raghav</h5>
                                 <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi Guys, Wassup!</p>
                              </div>
                           </div>
                           <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 8:56pm</h5>
                        </li>
                        <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                           <div className="flex items-center">
                              <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75]">
                                 <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse3.png" alt="Ellipse3.png" />
                              </div>
                              <div className=''>
                                 <h5 className='font-poppins text-sm font-semibold'>Swathi</h5>
                                 <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Sure!</p>
                              </div>
                           </div>
                           <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 2:31pm</h5>
                        </li>
                        <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                           <div className="flex items-center">
                              <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75]">
                                 <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse4.png" alt="Ellipse4.png" />
                              </div>
                              <div className=''>
                                 <h5 className='font-poppins text-sm font-semibold'>Kiran</h5>
                                 <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>Hi.....</p>
                              </div>
                           </div>
                           <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Yesterday, 6:22pm</h5>
                        </li>
                        <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                           <div className="flex items-center">
                              <div className="relative mr-3.5 after:content-[''] after:h-[15px] after:w-[15px] after:bg-[#00FF75]">
                                 <img className='w-[54px] h-[54px] rounded-full object-cover' src="images/friends/Ellipse5.png" alt="Ellipse5.png" />
                              </div>
                              <div className=''>
                                 <h5 className='font-poppins text-sm font-semibold'>Tejeshwini C</h5>
                                 <p className='font-poppins text-xs font-medium text-[#4D4D4DBF] mt-0.5'>I will call him today.</p>
                              </div>
                           </div>
                           <h5 className="font-poppins text-[10px] font-medium text-[#00000080]">Today, 12:22pm</h5>
                        </li>
                     </ul>
                  </div>

                  {/* User List */}
                  <div className=" w-[32%] h-full pt-5 pb-3 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow">
                     <div className='flex justify-between mb-5'>
                        <h3 className='font-poppins text-xl font-semibold'>User List</h3>
                        <div className='text-2xl cursor-pointer text-themeColor'>
                           <BsThreeDotsVertical />
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-14'>
                              <BiPlusMedical className='' />
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-14'>
                              <BiPlusMedical className='' />
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-14'>
                              <BiPlusMedical className='' />
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-14'>
                              <BiPlusMedical className='' />
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
                           <div className='inline-block p-1.5 bg-themeColor rounded-[5px] text-base text-white cursor-pointer border-[1px] border-solid border-themeColor duration-300 hover:text-themeColor hover:bg-white mr-14'>
                              <BiPlusMedical className='' />
                           </div>
                        </li>

                     </ul>
                  </div>
               </div>

               <div className="flex justify-between h-[48%] w-full">
                  {/* Friend Request */}
                  <div className="w-[32%] h-full pt-5 pb-3 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow">
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
                        {/* <li className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
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
                        </li> */}
                     </ul>
                  </div>

                  {/* My Groups */}
                  <div className="bg-lime-500 w-[32%] h-full"></div>

                  {/* Blocked Users */}
                  <div className="bg-green-500 w-[32%] h-full"></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Home