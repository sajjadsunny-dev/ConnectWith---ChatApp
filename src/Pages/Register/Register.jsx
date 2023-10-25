import './Register.css'
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { ColorRing } from "react-loader-spinner";

const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate()

    // data base
    const db = getDatabase();

    // input value pass
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|hotmail)+(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    const [loading, setLoading] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('')
    }
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('')
    }
    // input error
    const [emailError, setEmailError] = useState('')
    const [fullNameError, setFullNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = () => {
        setLoading(true)
        if (!email) {
            setEmailError('Enter your E-mail to signup');
        } else if (!isValidEmail(email)) {
            setEmailError('Please Enter your valid E-mail');
        }

        if (!fullName) {
            setFullNameError('Please Enter your Full Name');
        }

        if (!password) {
            setPasswordError('Please Enter your Password');
        }
        //  else if (!/^(?=.*[a-z])/.test(password)) {
        //     setPasswordError('Password must contain at least 1 lowercase character');
        // } else if (!/^(?=.*[A-Z])/.test(password)) {
        //     setPasswordError('Password must contain at least 1 uppercase character');
        // } else if (!/^(?=.*[0-9])/.test(password)) {
        //     setPasswordError('Password must contain at least 1 numeric character');
        // } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        //     setPasswordError('Password must contain at least 1 special character');
        // } else if (!/^(?=.{8,})/.test(password)) {
        //     setPasswordError('Password must be eight characters or longer');
        // }

        if (email && fullName && password && isValidEmail(email)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    updateProfile(auth.currentUser, {
                        displayName: fullName,
                        photoURL: "../src/assets/user.jpg"
                    })
                        .then(() => {
                            setEmail('')
                            setFullName('')
                            setPassword('')
                            toast.success('registrtation completed', { containerId: 'B' });
                            sendEmailVerification(auth.currentUser)
                            setTimeout((redirect) => {
                                setLoading(false)
                                navigate('/sign-in')
                                return redirect;
                            }, 4500);
                        }).then(() => {
                            set(ref(db, 'users/' + user.user.uid), {
                                username: user.user.displayName,
                                email: user.user.email,
                            });
                        })
                        .catch((error) => {
                            console.log(error.code);
                        })
                })
                .catch((error) => {
                    if (error.code.includes("auth/email-already-in-use")) {
                        setEmailError('This E-maill already in use')
                    }
                })
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
                <div className="w-full sm:w-[60%] tablet:w-[50%] md:w-[55%] h-full tablet:h-auto flex justify-center md:justify-end items-center sm:py-8 md:p-0">
                    <div className="xl:mr-[130px] px-3 md:px-5 lg:px-0">

                        <ToastContainer
                            enableMultiContainer
                            containerId={'B'}
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

                        <h2 className='font-nunito text-center lg:text-start md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Get started with easily register</h2>
                        <p className='font-nunito text-xl text-center lg:text-start font-regular text-black opacity-50 mb-2 md:mb-0 mt-2 md:mt-[13px]'>Free register and you can enjoy it</p>
                        <form className='w-full lg:w-[398px]'>
                            <div className="relative">
                                {
                                    emailError &&
                                    <div className=" absolute bottom-full right-0 translate-y-[-15px]">
                                        <h5 className="emailError error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-[-20px] after:border-8 after:border-solid select-none">{emailError}</h5>
                                    </div>
                                }
                                <div className='relative mt-12 md:mt-[55px]'>
                                    <input onChange={handleEmail} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${emailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} value={email} id='Email' type="email" placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] cursor-text duration-300 select-none ${emailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="Email">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    fullNameError &&
                                    <div className=" absolute bottom-full right-0 translate-y-[-15px]">
                                        <h5 className="error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-[-20px] after:border-8 after:border-solid select-none">{fullNameError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-[60px]">
                                    <input onChange={handleFullName} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor capitalize focus:opacity-70 ${fullNameError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} value={fullName} id='name' type="text" placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] duration-300 cursor-text select-none ${fullNameError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="name">Full Name</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    passwordError &&
                                    <div className=" absolute bottom-full right-0 translate-y-[-15px]">
                                        <h5 className="error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-[15px] font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-[-20px] after:border-8 after:border-solid select-none">{passwordError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-[60px]">
                                    <input onChange={handlePassword} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-14 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${passwordError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='password' type={passwordVisible ? 'text' : 'password'} value={password} placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] duration-300 cursor-text select-none ${passwordError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="password">Password</label>

                                    <div onClick={togglePasswordVisiblity} className={`text-3xl p-2 absolute right-4 top-1/2 translate-y-[-50%] opacity-30 cursor-pointer duration-200 ${passwordVisible ? 'text-themeColor opacity-90' : 'text-black'}`}>{passwordVisible ? <HiEyeOff /> : <HiEye />}</div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='py-5 w-full h-[68px] font-nunito text-xl text-white font-semibold text-center bg-themeColor rounded-[86px] hover:bg-[#FF9A00] duration-300 mt-[42px] mb-[25px] relative' type="button">
                                {
                                    loading ?
                                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20">
                                            <ColorRing
                                                visible={true}
                                                height="55"
                                                width="55"
                                                ariaLabel="blocks-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="blocks-wrapper"
                                                colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
                                            />
                                        </div>
                                        :
                                        <h3>Signup</h3>
                                }
                            </button>
                            <div>
                                <p className='font-openSans text-sm font-regular text-[#03014C] text-center'>Already  have an account ?<Link to="/sign-in" className='ml-1.5 font-bold text-[#EA6C00]' href="#">Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="w-full sm:w-[40%] tablet:w-[50%] md:w-[45%] h-auto tablet:h-screen md:h-auto bg-registerBanner bg-no-repeat bg-cover bg-center hidden sm:block"></div>
            </section >
        </>
    )
}

export default Register