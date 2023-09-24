import { HiArrowNarrowRight } from 'react-icons/hi';


const Error404 = () => {
   return (
      <>
         <section className='h-screen bg-[#F3F3F3]'>
            <div className='h-screen bg-404errorBg bg-no-repeat bg-cover bg-center flex justify-center flex-col pl-40'>
               <h2 className='font-openSans text-3xl md:text-[48px] font-bold text-[#1A2E35] leading-[125%]'>Ooops...<br /><span className='font-normal'>Page not found</span></h2>
               <p className='font-openSans text-3xl md:text-lg font-normal text-black w-[500px] mt-6'>The 404 code means that a server could not find a client-requested webpage.</p>
               <div className="">
                  <button className='py-5 px-8 font-nunito text-xl text-white font-semibold text-center bg-themeColor rounded-[9px] hover:bg-[#FF9A00] duration-300 mt-10 flex items-center'>Back to Homepage<div className='text-3xl ml-3'><HiArrowNarrowRight /></div></button>
               </div>
            </div>
         </section>
      </>
   )
}

export default Error404