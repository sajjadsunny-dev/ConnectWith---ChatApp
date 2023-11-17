import { HiDotsVertical } from 'react-icons/hi';
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from 'react';
import { ColorRing } from "react-loader-spinner";
import { useSelector } from 'react-redux';

const UserList = () => {
   const [loading, setLoading] = useState(true);
   const db = getDatabase();
   const [userData, setUserData] = useState([]);
   const [friendRequestData, setFriendRequestData] = useState([]);
   const [isFriend, setIsFriend] = useState([]);
   const data = useSelector(state => state.userLoginInfo.userInfo);

   useEffect(() => {
      const userRef = ref(db, 'users/')
      onValue(userRef, (snapshot) => {
         const arr = []
         snapshot.forEach((item) => {
            if (data.uid != item.key) {
               arr.push({ ...item.val(), userid: item.key });
            }
         })
         setUserData(arr)
         setLoading(false)
      });
   }, [db, data])

   const addFriend = (item) => {
      set(push(ref(db, 'friendRequest/')), {
         sendername: data.displayName,
         senderid: data.uid,
         receivername: item.username,
         receiverid: item.userid,
         profile_picture: data.photoURL,
      });
   }

   useEffect(() => {
      const friendrequest = ref(db, 'friendRequest/');
      onValue(friendrequest, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            arr.push(item.val().receiverid + item.val().senderid);
         })
         setFriendRequestData(arr)
      });
   }, [db])

   useEffect(() => {
      const friendList = ref(db, 'friends/');
      onValue(friendList, (snapshot) => {
         let arr = []
         snapshot.forEach((item) => {
            arr.push(item.val().receiverid + item.val().senderid);
         })
         setIsFriend(arr)
      });
   }, [db])

   return (
      <>
         <div className="w-full h-full pt-5 pb-3 pl-5 pr-[22px] rounded-custom shadow-homeCardShadow">
            <div className='flex justify-between mb-5'>
               <h3 className='font-poppins text-xl font-semibold'>User List</h3>
               <div className='text-2xl cursor-pointer text-themeColor'>
                  <HiDotsVertical />
               </div>
            </div>
            <ul className='eraseBorder h-[86%] overflow-y-auto relative'>

               {
                  loading ?
                     <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] z-20">
                        <ColorRing
                           visible={true}
                           height="60"
                           width="60"
                           ariaLabel="blocks-loading"
                           wrapperStyle={{}}
                           wrapperClass="blocks-wrapper"
                           colors={["#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5", "#5F35F5"]}
                        />
                     </div> :

                     userData.map((item, i) => (
                        // eslint-disable-next-line react/jsx-key
                        <li key={i} className='py-3 flex justify-between items-center border-b-[1px] border-solid border-[#00000040]'>
                           <div className="flex items-center">
                              <div className="mr-3.5">
                                 <img className='w-[54px] h-[54px] bg-slate-100 rounded-full object-cover' src={item.profile_picture} alt="" />
                              </div>
                              <div className='w-[120px] md:w-auto'>
                                 <h5 className='font-poppins text-sm font-semibold'>{item.username}</h5>
                                 <h5 className="font-poppins text-[10px] font-medium text-[#00000080] mt-1">Today, 8:56pm</h5>
                              </div>
                           </div>

                           {
                              isFriend.includes(item.userid + data.uid) || isFriend.includes(data.uid + item.userid)
                                 ?
                                 <div className="">
                                    <button className='font-poppins text-sm md:text-base font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Friend</button>
                                 </div>
                                 :
                                 friendRequestData.includes(item.userid + data.uid) || friendRequestData.includes(data.uid + item.userid)
                                    ?
                                    <div className="">
                                       <button className='font-poppins text-sm md:text-base font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Cancel</button>
                                    </div>
                                    :
                                    <div className="">
                                       <button onClick={() => addFriend(item)} className='font-poppins text-sm md:text-base font-semibold text-white px-2.5 py-0.5 bg-themeColor rounded-md border-[1px] border-solid border-themeColor hover:bg-white hover:text-themeColor duration-300'>Add Friend</button>
                                    </div>

                           }
                        </li>
                     ))

               }


            </ul>
         </div>
      </>
   )
}

export default UserList