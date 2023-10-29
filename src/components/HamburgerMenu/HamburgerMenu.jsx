import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { GiThreeFriends } from 'react-icons/gi';
import { PiUserListBold } from 'react-icons/pi';
import { MdOutlineBlock } from 'react-icons/md';

const HamburgerMenu = () => {
   const [showMenu, setShowMenu] = useState(false)
   const HambarMenuOpen = () => {
      setShowMenu((prev) => !prev);
   }
   const HambarMenuClose = () => {
      setShowMenu(false)
   }
   return (
      <>

         <div className="fixed top-0 left-0 z-[80] w-full md:hidden">
            <div className="p-3 bg-white flex justify-center relative">
               <div className="absolute top-1/2 left-[12px] translate-y-[-50%]">
                  <div className="w-full h-full">
                     <div onClick={HambarMenuOpen} className="text-2xl w-[44px] h-[44px] bg-[#f3f3f3] text-themeColor cursor-pointer rounded-full flex items-center justify-center">
                        <GiHamburgerMenu />
                     </div>
                  </div>
               </div>
               <h2 className="font-pacifico text-3xl text-themeColor select-none">ConnectWith</h2>
            </div>
         </div>

         <div className={`w-4/5 sm:w-3/5 h-full fixed top-0 left-0 z-[90] bg-white transition-all ease-linear ${showMenu ? "translate-x-0 duration-300 " : "translate-x-[-100%] duration-300 "} `}>
            <div className="flex items-center justify-between p-2.5 pt-5 sm:p-1.5">
               <div className="flex items-center">
                  <div className="w-[55px] h-[55px] rounded-full overflow-hidden cursor-pointer mr-2.5" >
                     <img className="w-full h-full" src="images/profilePhoto.png" alt="images/profilePhoto.png" />
                  </div>
                  <h2 className="font-poppins text-lg text-themeColor font-medium">Sajjad Hossain Sunny</h2>
               </div>
            </div>
            <ul className="px-3 mt-6 sm:mt-2">
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer mb-3 sm:mb-1.5">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <BiGroup />
                  </div>
                  Group List
               </li>
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer mb-3 sm:mb-1.5">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <GiThreeFriends />
                  </div>
                  Friens
               </li>
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer mb-3 sm:mb-1.5">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <PiUserListBold />
                  </div>
                  User List
               </li>
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer mb-3 sm:mb-1.5">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <AiOutlineUsergroupAdd />
                  </div>
                  FriendRequest
               </li>
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer mb-3 sm:mb-1.5">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <BiGroup />
                  </div>
                  My Groups
               </li>
               <li className="font-poppins font-medium tracking-wider text-base px-3 py-2.5 sm:p-1 rounded-[8px] bg-[#5F35F51A] flex items-center select-none cursor-pointer">
                  <div className="text-3xl sm:text-2xl text-themeColor mr-3 p-1 bg-white rounded-[8px]">
                     <MdOutlineBlock />
                  </div>
                  Block List
               </li>
            </ul>
         </div>
         <div onClick={HambarMenuClose} className={`w-full h-full bg-errorBg fixed top-0 left-0 z-[80] ${showMenu ? "scale-1" : "scale-0"}`}></div>

      </>
   )
}

export default HamburgerMenu