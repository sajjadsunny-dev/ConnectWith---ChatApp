import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const ResetPassword = () => {
   const auth = getAuth();
   const navigate = useNavigate();

   const [resetEmail, setResetEmail] = useState('')
   const [resetEmailError, setResetEmailError] = useState('')
   const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|hotmail)+(\.\w{2,3})+$/;
      return emailRegex.test(email);
   }
   const handleResetemail = (e) => {
      setResetEmail(e.target.value);
      setResetEmailError('')
   }
   const handelSearchEmail = async () => {
      if (!resetEmail) {
         setResetEmailError('You have to Enter your E-mail Address')
      } else if (!isValidEmail(resetEmail)) {
         setResetEmailError('Enter Valid E-mail Address')
      }
      if (resetEmail && isValidEmail(resetEmail)) {
         sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
               setResetEmail('')
               toast.warn('Check your email to reset password', { containerId: 'C' });
               setTimeout(() => {
                  navigate('/sign-in')
               }, 4500);
            })
            .catch((error) => {
               const errorCode = error.code;
               console.log(errorCode);
               if (errorCode == 'auth/invalid-email') {
                  setResetEmailError('Invalid Email')
               }
            });
      }

   }
   return (
      <>
         <section className='h-screen sm:h-auto md:h-screen flex'>
            <div className="w-full sm:w-[40%] tablet:w-[50%] md:w-[45%] h-auto tablet:h-screen md:h-auto hidden sm:flex justify-center xl:justify-end items-start md:items-center">
               <img className="w-[40%] md:w-10/12 fixed top-1/2 translate-y-[-50%] md:translate-y-0 md:static" src="images/resetPassword.png" alt="resetPassword.png" />
            </div>
            <div className="w-full sm:w-[60%] tablet:w-[50%] md:w-[55%] h-full tablet:h-auto flex items-center sm:py-8 md:p-0">
               <div className="xl:ml-16 px-3 md:px-5 lg:px-0">
                  <ToastContainer
                     enableMultiContainer
                     containerId={'C'}
                     position="top-center"
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                     theme="dark"
                  />
                  <div className="">
                     <img className='sm:hidden w-8/12 mx-auto mb-7' src="images/smdeviceReset.png" alt="" />
                  </div>
                  <h2 className='font-openSans md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Did you Forgot your Password?</h2>
                  <p className='font-nunito text-base md:text-xl lg:text-start font-regular text-black opacity-50 mb-2 md:mb-0 mt-2 md:mt-[13px]'>Please Enter your E-mail to Search your Account</p>
                  <form className='w-full lg:w-[398px]'>

                     <div className="relative">
                        {
                           resetEmailError &&
                           <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                              <h5 className="resetEmailError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-4 after:border-solid select-none">{resetEmailError}</h5>
                           </div>
                        }
                        <div className='relative mt-6 md:mt-10'>
                           <input onChange={handleResetemail} className={`resetInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${resetEmailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='email' value={resetEmail} type="email" placeholder='' />
                           <label className={`restLabel font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-y-[-50%] cursor-text duration-300 select-none ${resetEmailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="email">Email Address</label>
                        </div>
                     </div>

                     <button onClick={handelSearchEmail} className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor rounded-[9px] hover:bg-[#FF9A00] duration-300 mt-14 mb-[25px]' type="button">Search Your Account</button>
                     <div>
                        <p className='font-openSans text-sm font-regular text-[#03014C] text-center'>Already  have an account ?<Link to="/sign-in" className='ml-1.5 font-bold text-[#EA6C00]' href="#">Sign In</Link></p>
                     </div>
                  </form>
               </div>
            </div >
         </section >
      </>
   )
}

export default ResetPassword