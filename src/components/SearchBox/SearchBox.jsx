import { LuSearch } from 'react-icons/lu';
import { HiDotsVertical } from 'react-icons/hi';

const SearchBox = () => {
   return (
      <>
         <form className="relative">
            <div className="text-2xl cursor-pointer absolute top-1/2 left-[23px] translate-y-[-50%]">
               <LuSearch />
            </div>

            <input className="focus:outline-none font-poppins text-base font-medium text-black py-3.5 md:py-[17px] pl-14 md:pl-[78px] pr-12 w-full shadow-homeCardShadow rounded-custom" type="text" placeholder="Search" />

            <div className="text-2xl cursor-pointer text-themeColor absolute top-1/2 right-[22px] translate-y-[-50%]">
               <HiDotsVertical />
            </div>
         </form>
      </>
   )
}

export default SearchBox