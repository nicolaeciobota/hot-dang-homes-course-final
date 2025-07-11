import { ButtonLink } from "components/ButtonLink";
import { ThemeToggle } from "components/ThemeToggle/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { FaHouseUser, FaHeart } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  console.log("MAIN MENU: ", items);
  const [nav, setNav]=useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
      return (
    <>
      <div className="bg-slate-700 text-white px-5 h-[64px] sticky top-0 z-20 flex">
        <div className="py-4 pl-5 flex text-pink-600 dark:text-white">
          <Link href="/" className="flex items-center">
            <FaHouseUser size={30} className="cursor-pointer" />
            <FaHeart size={30} />
          </Link>
        </div>
        <div className="md:flex flex-1 justify-end hidden items-center">
          {(items || []).map((item) => (
            <div
              key={item.id}
              className="hover:bg-slate-600 cursor-pointer relative group"
            >
              <div>
                <Link legacyBehavior href={item.destination}>
                  <a className="p-5 block">{item.label}</a>
                </Link>
              </div>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-700 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.map((subMenuItem) => (
                    <Link legacyBehavior key={subMenuItem.id} href={subMenuItem.destination}>
                      <a className="block whitespace-nowrap p-5 hover:bg-slate-600">
                        {subMenuItem.label}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="ml-3 mr-3">
            <ThemeToggle />
          </div>
          <div className="ml-3 my-auto">
            <ButtonLink
              destination={callToActionDestination}
              label={callToActionLabel}
            />
          </div>
        </div>
        {/* mobile menu icon */}
        <div className="sm:hidden text-white h-[64px] sticky top-0 z-20 flex  w-full">
        <div className="py-4 pl-5 -ml-20 flex  text-pink-600 dark:text-white text-left">
          <Link href="/" className="flex items-center">
            <FaHouseUser size={30} className="cursor-pointer" />
            <FaHeart size={30} />
          </Link>
        </div>
         <div onClick={handleNav} className="flex flex-1 justify-end mr-3 my-auto z-10 cursor-pointer">
          {nav? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div></div>
         {/* mobile menu */}
         <div className={ nav ? "flex sm:hidden absolute top-0 right-0 left-0 bottom-0 items-center justify-center w-full h-screen bg-slate-700 text-center text-3xl ease-in-out duration-500" : "flex sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 justify-center items-center w-full h-screen bg-slate-700 text-center text-3xl ease-in-out duration-500"}>
           <div className="grid grid-flow-row auto-rows-max w-full">
           {(items || []).map((item) => (
              <div
                key={item.id} className="hover:bg-slate-600 cursor-pointer  group"
              >
                <div onClick={handleNav} className="p-4 ">
                  <Link legacyBehavior href={item.destination}>
                    <a className="text-center">{item.label}</a>
                  </Link>
                </div>
                {!!item.subMenuItems?.length && (
                  <div onClick={handleNav} className="group-hover:block hidden bg-slate-700 text-center mx-auto -mt-1 w-full">
                    {item.subMenuItems.map((subMenuItem) => (
                      <Link legacyBehavior key={subMenuItem.id} href={subMenuItem.destination}>
                        <a className="block whitespace-nowrap p-5 hover:bg-slate-600">
                          {subMenuItem.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}</div>
            ))}
            <div onClick={handleNav} className="mx-auto my-4">
              <ThemeToggle />
            </div>
            <div onClick={handleNav} className="mx-auto my-auto">
              <ButtonLink
                destination={callToActionDestination}
                label={callToActionLabel}
              />
            </div>
            </div>
           </div>
      </div>
      
      {/* Sticky theme toggle for mobile - bottom right */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <ThemeToggle isMobile={true} />
      </div>
    </>
  );
};
