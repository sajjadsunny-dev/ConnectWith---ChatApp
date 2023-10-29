import { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

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
                  <div onClick={HambarMenuClose} className="text-4xl cursor-pointer flex justify-end">
                     <AiOutlineClose />
                  </div>
               </div>
            </div >
         }
      </>
   )
}

export default HamburgerMenu