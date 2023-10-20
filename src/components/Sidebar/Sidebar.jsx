import { ImExit } from 'react-icons/im';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai';
import { PiChatCircleDotsFill } from 'react-icons/pi';
import { SlSettings } from 'react-icons/sl';
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';
import { BiSolidCloudUpload } from 'react-icons/bi';
import profilePhoto from '/images/profilePhoto.png';
import { createRef, useState } from 'react';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const Sidebar = () => {
   const auth = getAuth();
   const storage = getStorage();

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [uploadDP, setUploadDP] = useState(false);

   const [image, setImage] = useState("");
   const [cropData, setCropData] = useState("");
   const cropperRef = createRef();
   const data = useSelector(state => state.userLoginInfo.userInfo.user.photoURL);

   // logout button
   const handleLogOut = () => {
      signOut(auth).then(() => {
         dispatch(userLoginInfo(null));
         localStorage.removeItem('userLoginInfo');
         navigate('/sign-in');
      }).catch(() => {
      });
   }

   // profile image edit onClick part
   const profileDpUpload = () => {
      setUploadDP(true)
   }
   // cancel button
   const handleCancelUpload = () => {
      setUploadDP(false)
   }

   // Crop profile Imag before upload
   const handleCropImage = (e) => {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
         files = e.dataTransfer.files;
      } else if (e.target) {
         files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
         setImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
   };
   // Crop data
   const getCropData = () => {
      if (typeof cropperRef.current?.cropper !== "undefined") {
         setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

         const storageRef = ref(storage, auth.currentUser.uid);
         const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
         uploadString(storageRef, message4, 'data_url').then((snapshot) => {
            console.log('Uploaded a data_url string!');
            getDownloadURL(storageRef).then((downloadURL) => {
               console.log('File available at', downloadURL);
               updateProfile(auth.currentUser, {
                  photoURL: downloadURL
               }).then(() => {
                  setUploadDP(false)
               })
            });
         });
      }
   };

   return (
      <>
         <nav className="bg-themeColor h-full rounded-custom pt-7 pb-10 flex flex-col items-center justify-between">
            <div onClick={profileDpUpload} className="w-[100px] h-[100px] rounded-full overflow-hidden cursor-pointer relative after:content-[''] after:absolute after:h-full after:w-full after:bg-transparent after:top-0 after:left-0 after:duration-200 hover:after:bg-[#00000069] text-[35px] text-transparent hover:text-white" >
               <BiSolidCloudUpload className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] duration-200 z-10" />
               <img className="w-full h-full" src={data} alt="" />
            </div>
            <ul className='w-full mb-12'>
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
            {uploadDP &&
               <div className="w-screen h-screen bg-errorBg absolute top-0 left-0 z-50">
                  <div className={`py-8 px-6 w-[500px] bg-white rounded-xl shadow-uploadImg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 }`}>
                     <h2 className="font-poppins text-[35px] font-semibold mb-2">Upload Profile Photo</h2>

                     {
                        image ?
                           (
                              <div
                                 className="img-preview w-[120px] h-[120px] rounded-full overflow-hidden cursor-grab mx-auto"
                              />
                           )
                           :
                           (
                              <div onClick={profileDpUpload} className="w-[120px] h-[120px] rounded-full overflow-hidden cursor-grab mx-auto" >
                                 <img className="w-full h-full" src={profilePhoto} alt="" />
                              </div>
                           )
                     }

                     <input onChange={handleCropImage} className="mb-3 font-poppins text-base font-medium cursor-pointer ml-3 mt-2" type="file" />
                     {
                        image &&
                        <Cropper
                           ref={cropperRef}
                           style={{ height: 200, width: "70%", margin: '0 auto' }}
                           zoomTo={0.5}
                           initialAspectRatio={1}
                           preview=".img-preview"
                           src={image}
                           viewMode={1}
                           minCropBoxHeight={10}
                           minCropBoxWidth={10}
                           background={false}
                           responsive={true}
                           autoCropArea={1}
                           checkOrientation={false}
                           guides={true}
                        />
                     }
                     <div className="flex justify-end mt-6">
                        <button onClick={getCropData} className="py-2.5 px-6 font-nunito text-lg text-white font-semibold text-center bg-successGreen rounded-[9px] hover:bg-[#009534] duration-300 mr-5">Upload</button>
                        <button onClick={handleCancelUpload} className="py-2.5 px-6 font-nunito text-lg text-white font-semibold text-center bg-alertRed rounded-[9px] hover:bg-[#AD0000] duration-300">Cancel</button>
                     </div>
                  </div>
               </div>
            }
         </nav >
      </>
   )
}

export default Sidebar