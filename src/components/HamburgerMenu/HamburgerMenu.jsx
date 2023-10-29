import { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { GiThreeFriends } from 'react-icons/gi';
import { PiUserListBold } from 'react-icons/pi';
import { MdOutlineBlock } from 'react-icons/md';

const HamburgerMenu = () => {
   const [showMenu, setShowMenu] = useState(false)
   // const menuRef = useRef(null)
   const HambarMenuOpen = () => {
      console.log('working');
      setShowMenu(true)
   }
   const HambarMenuClose = () => {
      setShowMenu(false)
   }
   return (
      <>

         <div className="fixed top-0 left-0 z-[100] w-full md:hidden">
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

         {
            showMenu &&
            <div className="w-full h-full bg-errorBg fixed top-0 left-0 z-[100]">
               <div className={`w-3/4 sm:w-3/5 h-full bg-white  ${showMenu ? "translate-x-0" : "translate-x-[-100%]"} `}>
                  <div className="flex items-center justify-between p-2.5 pt-5 sm:p-1.5">
                     <div className="flex items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer mr-2.5" >
                           <img className="w-full h-full" src="images/profilePhoto.png" alt="images/profilePhoto.png" />
                        </div>
                        <h2 className="font-poppins text-base text-themeColor font-semibold">Sajjad Hossain Sunny</h2>
                     </div>
                     <div onClick={HambarMenuClose} className="text-xl cursor-pointer">
                        <AiOutlineClose />
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
            </div >
         }
      </>
   )
}

export default HamburgerMenu