import { ImExit } from 'react-icons/im';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai';
import { PiChatCircleDotsFill } from 'react-icons/pi';
import { SlSettings } from 'react-icons/sl';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';

const Sidebar = () => {
   const auth = getAuth();
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleLogOut = () => {
      signOut(auth).then(() => {
         dispatch(userLoginInfo(null));
         localStorage.removeItem('userLoginInfo');
         navigate('/sign-in');
      }).catch(() => {
      });
   }
   return (
      <>
         <nav className="bg-themeColor h-full rounded-custom pt-7 pb-10 flex flex-col items-center justify-between">
            <div className="">
               <img src="images/group-lists/g1.png" alt="" />
            </div>
            <ul className='w-full mb-20'>
               <li className="h-12 relative mb-14 text-5xl text-themeColor cursor-pointer before:content-[''] before:h-[80px] before:w-[84%] before:bg-white before:absolute before:top-[50%] before:right-0 before:translate-y-[-50%] before:rounded-l-custom before:transition-all before:duration-300 before:ease-linear after:content-[''] after:h-[80px] after:w-[8px] after:bg-themeColor after:absolute after:top-[50%] after:right-0 after:translate-y-[-50%] after:rounded-l-custom after:transition-all after:duration-300 after:ease-linear after:shadow-navAfterShadow hover:text-themeColor">
                  <AiOutlineHome className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-linear' />
               </li>
               <li className="h-12 relative mb-14 text-5xl text-[#BAD1FF] cursor-pointer">
                  <PiChatCircleDotsFill className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-linear drop-shadow-navIconDropShadow' />
               </li>
               <li className="h-12 relative mb-14 text-[60px] text-[#BAD1FF] cursor-pointer">
                  <AiOutlineBell className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-linear drop-shadow-navIconDropShadow' />
               </li>
               <li className="h-12 relative text-5xl text-[#BAD1FF] cursor-pointer">
                  <SlSettings className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-linear drop-shadow-navIconDropShadow' />
               </li>
               {/* <li className="h-12 relative text-5xl text-[#BAD1FF] cursor-pointer before:content-[''] before:h-[80px] before:w-0 before:bg-white before:absolute before:top-[50%] before:right-0 before:translate-y-[-50%] before:rounded-l-custom before:transition-all before:duration-300 before:ease-linear after:content-[''] after:h-[80px] after:w-0 after:bg-themeColor after:absolute after:top-[50%] after:right-0 after:translate-y-[-50%] after:rounded-l-custom after:transition-all after:duration-300 after:ease-linear after:shadow-navAfterShadow hover:before:w-[84%] hover:after:w-[8px] hover:text-themeColor">
                  <SlSettings className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-linear drop-shadow-navIconDropShadow' />
               </li> */}
            </ul>
            <div className="text-5xl text-white drop-shadow-navIconDropShadow cursor-pointer">
               <ImExit onClick={handleLogOut} />
            </div>
         </nav>
      </>
   )
}

export default Sidebar