import { useState } from "react"
import { getDatabase, ref, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

const CreateGroupModal = (props) => {
   const { groupModal, groupModalForm } = props

   const [loading, setLoading] = useState(false);
   const [groupName, setGroupName] = useState('');
   const [groupAbout, setGroupAbout] = useState('');

   const data = useSelector(state => state.userLoginInfo.userInfo);
   const db = getDatabase();

   const cancelCreateGroup = () => {
      groupModalForm.current.classList.add('scale-0')
      setGroupName('')
      setGroupAbout('')
      setTimeout(() => {
         groupModal.current.classList.add('hidden')
         setLoading(false)
      }, 300)
   }

   const createGroup = () => {
      setLoading(true)
      if (!groupName) {
         alert('You Have To Enter Group Name')
         setLoading(false)
      } else if (!groupAbout) {
         set(push(ref(db, 'groups/')), {
            groupname: groupName,
            groupabout: "Let's Chat",
            creator: data.displayName,
            creatorid: data.uid,
         }).then(() => {
            setTimeout(() => {
               cancelCreateGroup()
            }, 150)
         })
      } else {
         set(push(ref(db, 'groups/')), {
            groupname: groupName,
            groupabout: groupAbout,
            creator: data.displayName,
            creatorid: data.uid,
         }).then(() => {
            setTimeout(() => {
               cancelCreateGroup()
            }, 150)
         })
      }
   }

   return (
      <>
         <div ref={groupModal} className="w-screen h-screen bg-errorBg fixed top-0 left-0 z-50 hidden">
            <div ref={groupModalForm} className={`w-10/12 md:w-1/4 py-5 md:py-8 px-4 md:px-6 bg-white rounded-xl shadow-uploadImg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50} transition-all duration-300 ease-linear scale-0`}>
               <h2 className="font-poppins text-2xl md:text-[35px] font-semibold mb-6 md:mb-12 text-center">Create Your Group</h2>

               <form action="" className="flex flex-col">
                  <input onChange={(e) => setGroupName(e.target.value)} type="text" className="px-5 py-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-base md:text-xl font-medium md:font-semibold text-headColor capitalize mb-5" placeholder="Enter Group Name" value={groupName} />

                  <input onChange={(e) => setGroupAbout(e.target.value)} type="text" className="px-5 py-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-base md:text-xl font-medium md:font-semibold text-headColor capitalize" placeholder="Group About" value={groupAbout} />


                  <div className="flex justify-end mt-8">
                     <button onClick={createGroup} className="py-1 md:py-2 w-[90px] md:w-[110px] font-nunito text-lg text-white font-semibold text-center bg-successGreen rounded-[9px] hover:bg-[#009534] duration-300 mr-3 md:mr-5 relative" type="button">
                        {
                           loading ?
                              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                                 <ColorRing
                                    visible={true}
                                    height="45"
                                    width="45"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
                                 />
                              </div>
                              :
                              <h3>Create</h3>
                        }
                     </button>
                     <button onClick={cancelCreateGroup} className="py-1 md:py-2 w-[90px] md:w-[110px] font-nunito text-lg text-white font-semibold text-center bg-alertRed rounded-[9px] hover:bg-[#AD0000] duration-300" type="button">Cancel</button>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default CreateGroupModal