import { useState } from 'react'
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';

const Login = () => {
    const dispatch = useDispatch()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate()
    // input value pass
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|hotmail)+(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    const handleemail = (e) => {
        setemail(e.target.value);
        setemailError('')
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
        setpasswordError('')
    }
    // input error
    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')

    const handleSubmit = () => {
        if (!email) {
            setemailError('Enter your E-mail to sign-in');
        } else if (!isValidEmail(email)) {
            setemailError('Please Enter your valid E-mail');
        }

        if (!password) {
            setpasswordError('Please Enter your Password');
        }

        if (email && password && isValidEmail(email)) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    setemail('')
                    setPassword('')
                    toast.success('login success');
                    dispatch(userLoginInfo(user));
                    localStorage.setItem('userLoginInfo', JSON.stringify((user)))
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("auth/invalid-login-credentials")) {
                        setemailError('Invalid username or password')
                    }
                });
        }
    }

    // password visible on click
    const [passwordVisible, setpasswordVisible] = useState(false);
    const togglepasswordVisiblity = () => {
        setpasswordVisible(!passwordVisible);
    }

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }

    return (
        <>
            <section className='h-screen sm:h-auto md:h-screen flex'>
                <div className="w-full sm:w-[60%] tablet:w-[50%] md:w-[55%] h-full tablet:h-auto flex justify-center items-center sm:py-8 md:p-0">
                    <div className="xl:ml-20 md:px-5 lg:px-0">
                        <ToastContainer
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

                        <h2 className='font-openSans md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Login to your account!</h2>
                        <form className='w-full lg:w-[398px]'>
                            <button onClick={handleGoogleSignin} className='font-openSans text-sm font-semibold tracking-wide text-[#03014C] py-3.5 px-4 md:pt-[23px] md:pb-[22px] md:pl-[30px] md:pr-[42px] border-[1px] border-solid border-[#03014C] flex items-center rounded-[9px] mt-[30px]' type="button"><span className='text-2xl mr-2'><FcGoogle /></span>Login with Google</button>

                            <div className="relative">
                                {
                                    emailError &&
                                    <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                                        <h5 className="emailError LoginError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-8 after:border-solid after:translate-x-[20px] rounded select-none">{emailError}</h5>
                                    </div>
                                }
                                <div className='relative mt-12 md:mt-10'>
                                    <input onChange={handleemail} className={`LoginInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${emailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} value={email} id='email' type="email" placeholder='' />
                                    <label className={`LoginLabel font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-y-[-50%] cursor-text duration-300 select-none ${emailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="email">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    passwordError &&
                                    <div className=" absolute bottom-full left-0 top-full translate-y-[10px]">
                                        <h5 className="emailError LoginError py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold text-white after:content-[''] after:absolute after:bottom-full after:left-0 after:border-8 after:border-solid after:translate-x-[20px] rounded select-none">{passwordError}</h5>
                                    </div>
                                }
                                <div className="relative mt-16">
                                    <input onChange={handlepassword} className={`LoginInput py-3 md:py-5 w-full border-b-2 focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 pr-[65px] ${passwordError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='password' type={passwordVisible ? 'text' : 'password'} value={password} placeholder='' />
                                    <label className={`LoginLabel font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-y-[-50%] duration-300 cursor-text select-none ${passwordError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="password">Password</label>

                                    <div onClick={togglepasswordVisiblity} className={`text-3xl p-2 absolute right-4 top-1/2 translate-y-[-50%] opacity-30 cursor-pointer duration-200 ${passwordVisible ? 'text-themeColor opacity-90' : 'text-black'}`}>{passwordVisible ? <HiEyeOff /> : <HiEye />}</div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor rounded-[9px] hover:bg-[#FF9A00] duration-300 mt-14 mb-[25px]' type="button">Login to Continue</button>
                            <div>
                                <p className='font-openSans text-sm font-regular text-[#03014C]'>Don’t have an account ?<Link to="/sign-up" className='ml-1.5 font-bold text-[#EA6C00]' href="#">Sign up</Link></p>
                                <p className='font-openSans text-sm font-regular text-[#03014C] mt-2'>Have you <Link to="/reset-password" className='font-bold text-[#EA6C00]'>forgotten password ?</Link></p>
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