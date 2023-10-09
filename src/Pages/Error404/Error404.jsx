import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Error404 = () => {
   return (
      <>
         <section className='h-screen bg-[#F3F3F3]'>
            <div className='h-screen sm:bg-404errorBg tablet:bg-none md:bg-404errorBg bg-no-repeat bg-cover bg-center flex flex-col justify-between sm:justify-center md:pl-14 xl:pl-40'>
               <img className='object-cover block sm:hidden tablet:block md:hidden w-[550px] mx-auto' src="images/error-smDevice2.png" alt="" />
               <div className="px-5 md:px-0 mb-16 sm:mb-0">
                  <h2 className='font-openSans text-4xl md:text-3xl md:text-[48px] font-bold text-[#1A2E35] leading-[145%] tablet:leading-[125%]'>Ooops...<br /><span className='font-normal'>Page not found</span></h2>
                  <p className='font-openSans text-3xl md:text-lg font-normal text-black w-[500px] mt-6 hidden md:block'>The 404 code means that a server could not find a client-requested webpage.</p>

                  <Link to='/sign-in'>
                     <button className='py-5 px-8 font-nunito text-xl text-white font-semibold text-center bg-themeColor rounded-[9px] hover:bg-[#FF9A00] duration-300 mt-10 flex items-center'>Back to Login<div className='text-3xl ml-3'><HiArrowNarrowRight /></div></button>
                  </Link>
               </div>

            </div>
         </section>
      </>
   )
}

export default Error404