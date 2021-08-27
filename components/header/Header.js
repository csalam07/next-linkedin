import { useState } from "react";
import { GrLinkedin, GrFormSearch, GrApps } from "react-icons/gr";
import { AiFillHome, AiFillCaretDown } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { HiBriefcase } from "react-icons/hi";
import { BsFillChatDotsFill, BsFillBellFill } from "react-icons/bs";

import Router from "next/router";
import NavItems from "./NavItems";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  const [active, setActive] = useState("/");

  const navigateUser = (id) => {
    Router.push(id);
    setActive(id);
  };
  return (
    <header
      className={`${!session ? "hidden" : "bg-white shadow-sm z-50 sticky"} `}
    >
      <div className="flex items-center justify-between w-full lg:max-w-7xl mx-auto">
        <div className="flex space-x-6 p-2 mx-1 lg:mx-0 w-full">
          <GrLinkedin
            className="h-10 w-10 text-linkedin-blue"
            onClick={() => navigateUser("/")}
          />
          <form className="flex flex-1 bg-[#eef3f8] max-w-sm items-center space-x-2 p-2 rounded-md">
            <GrFormSearch className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
            <button
              type="submit"
              className="hidden"
              onClick={(e) => e.preventDefault()}
            >
              search
            </button>
          </form>
        </div>
        <nav
          className="left-0 bottom-0 z-50 bg-white border-t-2 shadow-xl md:px-4 md:shadow-none md:border-t-0 fixed md:top-0 md:sticky flex items-center 
         justify-between w-full md:max-w-lg lg:max-w-3xl p-4 md:p-0 text-xs cursor-pointer md:space-x-1"
        >
          <NavItems
            Icon={AiFillHome}
            title="Home"
            active={active === "/" ? true : false}
            onClick={() => navigateUser("/")}
          />
          <NavItems
            Icon={RiGroupFill}
            title="My Network"
            active={active === "/network" ? true : false}
            onClick={() => navigateUser("/network")}
          />
          <NavItems Icon={HiBriefcase} title="Jobs" />
          <NavItems Icon={BsFillChatDotsFill} title="Messaging" />
          <NavItems Icon={BsFillBellFill} title="Notifications" />
          <NavItems
            title="me"
            avatar={true}
            onClick={signOut}
            Down={AiFillCaretDown}
          />
          <NavItems Icon={GrApps} title="Work" Down={AiFillCaretDown} />
          <p className="hidden lg:inline-flex hover:underline w-full text-center">
            Try Premium for free
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
