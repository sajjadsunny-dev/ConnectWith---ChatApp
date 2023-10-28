import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
   const HambarMenu = () => {
      console.log('working');
   }
   return (
      <>
         <div className="w-full h-full">
            <div onClick={HambarMenu} className="text-2xl w-[44px] h-[44px] bg-[#f3f3f3] text-themeColor cursor-pointer rounded-full flex items-center justify-center">
               <GiHamburgerMenu />
            </div>
         </div>
      </>
   )
}

export default HamburgerMenu