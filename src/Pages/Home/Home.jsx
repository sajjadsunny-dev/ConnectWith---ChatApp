import { BsThreeDotsVertical } from 'react-icons/Bs';
import { LuSearch } from 'react-icons/Lu';
import { ImExit } from 'react-icons/Im';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/Ai';
import { PiChatCircleDotsFill } from 'react-icons/Pi';
import { SlSettings } from 'react-icons/Sl';
const Home = () => {
   return (
      <>
         <section className="h-screen px-5 py-5 flex gap-11">
            <nav className="bg-themeColor h-full w-[160px] rounded-custom pt-7 pb-10 flex flex-col items-center justify-between">
               <div className="">
                  <img src="images/group-lists/g1.png" alt="" />
               </div>
               <ul>
                  <li className="mb-14 text-5xl text-[#BAD1FF] cursor-pointer drop-shadow-navIconDropShadow"><AiOutlineHome /></li>
                  <li className='mb-14 text-5xl text-[#BAD1FF] cursor-pointer drop-shadow-navIconDropShadow'><PiChatCircleDotsFill /></li>
                  <li className='mb-14 text-5xl text-[#BAD1FF] cursor-pointer drop-shadow-navIconDropShadow'><AiOutlineBell /></li>
                  <li className='mb-28 text-5xl text-[#BAD1FF] cursor-pointer drop-shadow-navIconDropShadow'><SlSettings /></li>
               </ul>
               <div className="text-5xl text-white drop-shadow-navIconDropShadow">
                  <ImExit />
               </div>
            </nav>
            <div className="h-full w-[100%] grid grid-cols-12 gap-x-[22px] gap-y-[43px]">
               <div className="col-span-4">
                  <form className='flex justify-between items-center rounded-custom bg-white px-[23px] py-[17px] shadow-homeCardShadow mb-10'>
                     <div className="text-2xl cursor-pointer">
                        <LuSearch />
                     </div>
                     <input className='focus:outline-none font-poppins text-base font-medium text-black pl-9 pr-2 w-full' type="text" placeholder='Search' />
                     <div className='text-2xl cursor-pointer text-themeColor'>
                        <BsThreeDotsVertical />
                     </div>
                  </form>

                  <div className='pt-3 pb-5 pl-5 pr-[23px] rounded-custom shadow-homeCardShadow'>
                     <div className='flex justify-between mb-1'>
                        <h3 className='font-poppins text-xl font-semibold'>Groups List</h3>
                        <div className='text-2xl cursor-pointer text-themeColor'>
                           <BsThreeDotsVertical />
                        </div>
                     </div>
                     <ul className='h-[280px] overflow-y-auto'>
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
                        <li className='py-3 pr-3 flex justify-between items-center'>
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
                        <li className='py-3 pr-3 flex justify-between items-center'>
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
                        <li className='py-3 pr-3 flex justify-between items-center'>
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
               <div className="bg-stone-400  col-span-4"></div>
               <div className="bg-orange-500  col-span-4"></div>
               <div className="bg-amber-500  col-span-4"></div>
               <div className="bg-lime-500  col-span-4"></div>
               <div className="bg-green-500  col-span-4"></div>
            </div>
         </section>
      </>
   )
}

export default Home