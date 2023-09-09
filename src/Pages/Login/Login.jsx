import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/Ai';
import { FcGoogle } from 'react-icons/Fc';

const Login = () => {
    // input value pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('')
    }
    // input error
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = () => {
        if (!email) {
            setEmailError('Enter your E-mail to signup');
        } else if (isValidEmail(email)) {
            console.log('valid');
        } else {
            console.log('invalid');
            setEmailError('Please Enter your valid E-mail');
        }

        if (!password) {
            setPasswordError('Please Enter your Password');
        }
    }

    // password visible on click
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <>
            <section className='h-screen sm:h-auto md:h-screen flex'>
                <div className="w-full sm:w-[60%] md:w-[55%] h-full flex justify-center items-center sm:py-8 md:p-0">
                    <div className="xl:ml-20 px-3 md:px-5 lg:px-0">
                        <h2 className='font-nunito text-center lg:text-start md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Login to your account!</h2>
                        <form className='w-full lg:w-[398px]'>
                            <button className='font-openSans text-sm font-semibold tracking-wide text-[#03014C] pt-[23px] pb-[22px] pl-[30px] pr-[42px] border-[1px] border-solid border-[#03014C] flex items-center rounded-[9px] mt-[30px]' type="button"><span className='text-2xl mr-2'><FcGoogle /></span>Login with Google</button>

                            <div className="relative">
                                {
                                    emailError &&
                                    <div className=" absolute bottom-full left-1/2 translate-x-[-50%] translate-y-[-15px]">
                                        <h5 className="emailError error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:left-2/4 after:translate-x-[-50%] after:border-8 after:border-solid select-none">{emailError}</h5>
                                    </div>
                                }
                                <div className='relative mt-12 md:mt-[55px]'>
                                    <input onChange={handleEmail} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${emailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='loginEmail' type="email" placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] cursor-text duration-300 select-none ${emailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="loginEmail">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    passwordError &&
                                    <div className=" absolute bottom-full left-1/2 translate-x-[-50%] translate-y-[-15px]">
                                        <h5 className="error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:left-2/4 after:translate-x-[-50%] after:border-8 after:border-solid select-none">{passwordError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-[60px]">
                                    <input onChange={handlePassword} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-14 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${passwordError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='loginPassword' type={passwordVisible ? 'text' : 'password'} value={password} placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] duration-300 cursor-text select-none ${passwordError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="loginPassword">Password</label>

                                    <div onClick={togglePasswordVisiblity} className={`text-3xl p-2 absolute right-4 top-1/2 translate-y-[-50%] opacity-30 cursor-pointer duration-200 ${passwordVisible ? 'text-themeColor opacity-90' : 'text-black'}`}>{passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor border-2 border-solid border-themeColor rounded-[9px] hover:bg-white hover:text-themeColor duration-300 mt-[42px] mb-[25px]' type="button">Login to Continue</button>
                            <div>
                                <p className='font-openSans text-sm font-regular text-[#03014C]'>Don’t have an account ? <a className='font-bold text-[#EA6C00]' href="#">Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="w-full sm:w-[40%] md:w-[45%] bg-loginBanner bg-no-repeat bg-cover bg-center hidden sm:block"></div>
            </section >
        </>
    )
}

export default Login