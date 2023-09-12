import './Login.css'
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/Ai';
import { FcGoogle } from 'react-icons/Fc';

const Login = () => {
    // input value pass
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const isValidEmail = (email) => {
        const loginEmailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|hotmail)+(\.\w{2,3})+$/;
        return loginEmailRegex.test(email);
    }

    const handleLoginEmail = (e) => {
        setLoginEmail(e.target.value);
        setLoginEmailError('')
    }
    const handleLoginPassword = (e) => {
        setLoginPassword(e.target.value);
        setLoginPasswordError('')
    }
    // input error
    const [loginEmailError, setLoginEmailError] = useState('')
    const [loginPasswordError, setLoginPasswordError] = useState('')

    const handleSubmit = () => {
        if (!loginEmail) {
            console.log('enter email');
            setLoginEmailError('Enter your E-mail to signup');
        } else if (!isValidEmail(loginEmail)) {
            console.log('invalid');
            setLoginEmailError('Please Enter your valid E-mail');
        }

        if (!loginPassword) {
            setLoginPasswordError('Please Enter your Password');
        }
    }

    // password visible on click
    const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
    const toggleLoginPasswordVisiblity = () => {
        setLoginPasswordVisible(!loginPasswordVisible);
    }

    return (
        <>
            <section className='h-screen sm:h-auto md:h-screen flex'>
                <div className="w-full sm:w-[60%] tablet:w-[50%] md:w-[55%] h-full tablet:h-auto flex justify-center items-center sm:py-8 md:p-0">
                    <div className="xl:ml-20 px-3 md:px-5 lg:px-0">
                        <h2 className='font-openSans md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Login to your account!</h2>
                        <form className='w-full lg:w-[398px]'>
                            <button className='font-openSans text-sm font-semibold tracking-wide text-[#03014C] py-3.5 px-4 md:pt-[23px] md:pb-[22px] md:pl-[30px] md:pr-[42px] border-[1px] border-solid border-[#03014C] flex items-center rounded-[9px] mt-[30px]' type="button"><span className='text-2xl mr-2'><FcGoogle /></span>Login with Google</button>

                            <div className="relative">
                                {
                                    loginEmailError &&
                                    <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                                        <h5 className="emailError LoginError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-4 after:border-solid select-none">{loginEmailError}</h5>
                                    </div>
                                }
                                <div className='relative mt-12 md:mt-10'>
                                    <input onChange={handleLoginEmail} className={`LoginInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${loginEmailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='loginEmail' type="email" placeholder='' />
                                    <label className={`LoginLabel font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-y-[-50%] cursor-text duration-300 select-none ${loginEmailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="loginEmail">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    loginPasswordError &&
                                    <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                                        <h5 className="emailError LoginError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-4 after:border-solid select-none">{loginPasswordError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-16">
                                    <input onChange={handleLoginPassword} className={`LoginInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${loginPasswordError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='loginPassword' type={loginPasswordVisible ? 'text' : 'password'} value={loginPassword} placeholder='' />
                                    <label className={`LoginLabel font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-y-[-50%] duration-300 cursor-text select-none ${loginPasswordError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="loginPassword">Password</label>

                                    <div onClick={toggleLoginPasswordVisiblity} className={`text-3xl p-2 absolute right-4 top-1/2 translate-y-[-50%] opacity-30 cursor-pointer duration-200 ${loginPasswordVisible ? 'text-themeColor opacity-90' : 'text-black'}`}>{loginPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor border-2 border-solid border-themeColor rounded-[9px] hover:bg-white hover:text-themeColor duration-300 mt-14 mb-[25px]' type="button">Login to Continue</button>
                            <div>
                                <p className='font-openSans text-sm font-regular text-[#03014C]'>Don’t have an account ? <a className='font-bold text-[#EA6C00]' href="#">Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="w-full sm:w-[40%] tablet:w-[50%] md:w-[45%] h-auto tablet:h-screen md:h-auto bg-loginBanner bg-no-repeat bg-cover bg-center hidden sm:block"></div>
            </section >
        </>
    )
}

export default Login