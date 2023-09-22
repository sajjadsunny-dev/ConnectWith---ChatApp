import './ResetPassword.css'
import { Link } from "react-router-dom"

const ResetPassword = () => {
   return (
      <>
         <section className='h-screen sm:h-auto md:h-screen flex'>
            <div className="w-full sm:w-[40%] tablet:w-[50%] md:w-[45%] h-auto tablet:h-screen md:h-auto flex justify-end items-center">
               <img className="w-9/12" src="images/resetPassword.png" alt="resetPassword.png" />
            </div>
            <div className="w-full sm:w-[60%] tablet:w-[50%] md:w-[55%] h-full tablet:h-auto flex items-center sm:py-8 md:p-0">
               <div className="xl:ml-14 px-3 md:px-5 lg:px-0">
                  <h2 className='font-openSans md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Did you Forgot your Password?</h2>
                  <p className='font-nunito text-xl text-center lg:text-start font-regular text-black opacity-50 mb-2 md:mb-0 md:mt-2 mt-2 md:mt-[13px]'>Please Enter your E-mail to Search your Account</p>
                  <form className='w-full lg:w-[398px]'>

                     <div className="relative">
                        <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                           <h5 className="resetEmailError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-4 after:border-solid select-none">Enter Valid Email Address</h5>
                        </div>
                        <div className='relative mt-12 md:mt-10'>
                           <input className={`resetInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 `} id='loginEmail' type="email" placeholder='' />
                           <label className={`restLabel font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-y-[-50%] cursor-text duration-300 select-none`} htmlFor="loginEmail">Email Address</label>
                        </div>
                     </div>

                     <button className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor border-2 border-solid border-themeColor rounded-[9px] hover:bg-white hover:text-themeColor duration-300 mt-14 mb-[25px]' type="button">Search Your Account</button>
                     <div>
                        <p className='font-openSans text-sm font-regular text-[#03014C] text-center'>Already  have an account ? <Link to="/sign-in" className='font-bold text-[#EA6C00]' href="#">Sign In</Link></p>
                     </div>
                  </form>
               </div>
            </div >
         </section >
      </>
   )
}

export default ResetPassword