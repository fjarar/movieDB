import React, { Suspense } from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl 2xl:max-w-full 2xl:mx-24 mx-auto">
      <div className="flex gap-4">
        <Suspense>
          <MenuItem title="home" address="/" Icon={AiFillHome} />
        </Suspense>
        <Suspense>
          <MenuItem
            title="about"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            PeliculApp
          </span>
          {/* <span className="text-xl hidden sm:inline">Clone</span> */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
