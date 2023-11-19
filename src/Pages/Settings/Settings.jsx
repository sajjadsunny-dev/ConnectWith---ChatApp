import Sidebar from "../../components/Sidebar/Sidebar"

const Settings = () => {
   return (
      <>
         <section className="h-screen pt-16 p-2.5 md:p-3 xl:p-5 md:grid grid-cols-9 gap-10 lg:landscape:gap-5 xl:landscape:gap-10">

            <div className="col-span-1">
               <Sidebar />
            </div>

            <div className="w-full h-full  md:col-span-8 grid grid-cols-12 gap-7 bg-teal-400">

            </div>
         </section>
      </>
   )
}

export default Settings