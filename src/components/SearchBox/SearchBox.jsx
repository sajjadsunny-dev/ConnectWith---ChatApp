import { LuSearch } from 'react-icons/Lu';
import { BsThreeDotsVertical } from 'react-icons/Bs';

const SearchBox = () => {
   return (
      <>
         <form className='flex justify-between items-center rounded-custom bg-white px-[23px] py-[17px] shadow-homeCardShadow'>
            <div className="text-2xl cursor-pointer">
               <LuSearch />
            </div>
            <input className='focus:outline-none font-poppins text-base font-medium text-black pl-9 pr-2 w-full' type="text" placeholder='Search' />
            <div className='text-2xl cursor-pointer text-themeColor'>
               <BsThreeDotsVertical />
            </div>
         </form>
      </>
   )
}

export default SearchBox