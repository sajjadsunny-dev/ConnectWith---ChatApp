import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
   const [shadowVisible, setShadowVisible] = useState(false);
  // const menuRef = useRef(null)
  const HambarMenu = () => {
    console.log("working");
    setShowMenu((prev) => !prev);
  };
  useEffect(() => {
    if (showMenu) {
      // Set menuVisible to true after a delay
      const timer = setTimeout(() => {
        setShadowVisible(true);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setShadowVisible(false);
    }
  }, [showMenu]);

  return (
    <>
      <section className="md:hidden relative">
        <div className="fixed top-0 left-0 z-[100] w-full md:hidden">
          <div className="p-3 bg-white flex justify-center relative">
            <div className="absolute top-1/2 left-[12px] translate-y-[-50%]">
              <div className="w-full h-full">
                <div
                  onClick={HambarMenu}
                  className="text-2xl w-[44px] h-[44px] bg-[#f3f3f3] text-themeColor cursor-pointer rounded-full flex items-center justify-center"
                >
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
            <h2 className="font-pacifico text-3xl text-themeColor select-none">
              ConnectWith
            </h2>
          </div>
        </div>

        <div
          className={` fixed duration-300 h-full z-[9999] ${
            showMenu ? ` left-0 ` : `-left-full`
          }`}
        >
          <div className={`w-full h-full fixed top-0 ${shadowVisible?`bg-black/20 duration-200`:``}`}>
            <div className={`w-3/4 sm:w-3/5 h-full bg-white`}>
              <div
                onClick={HambarMenu}
                className="text-4xl cursor-pointer flex justify-end"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HamburgerMenu;
