import Image from "next/image";
import {
  BsSquareFill,
  BsHash,
  BsChevronCompactDown,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { HiUserGroup, HiPlus } from "react-icons/hi";

const recentItem = (topic) => (
  <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-1 p-1 font-semibold transition duration-150 ease-in hover:scale-105 hover:bg-gray-200 hover:text-black rounded-md">
    <span className="mr-2">
      <BsHash />
    </span>
    <p>{topic}</p>
  </div>
);

const recentTopics = (topic, Icon, active) => (
  <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-1 p-1 font-semibold transition duration-150 ease-in hover:scale-105 hover:bg-gray-200 hover:text-black rounded-md">
    <span className="mr-2">
      <Icon className={`${active && "text-yellow-400"}`} />
    </span>
    <p>{topic}</p>
  </div>
);

function LeftSidebar({ session }) {
  return (
    <div className="hidden md:inline md:flex-[0.4] rounded-xl text-center h-screen sticky">
      <div className="flex flex-col items-center border border-gray-300 border-b-0 bg-white pb-3 rounded-md">
        <img
          src="/github.png"
          alt=""
          className="-mb-10 w-full h-20 rounded-md object-cover"
        />
        <div className="rounded-full cursor-pointer bg-white shadow-sm">
          <Image
            className="rounded-full"
            src={session.user.image}
            alt="Picture of the user"
            width={70}
            height={70}
            objectFit="contain"
          />
        </div>

        <h2>{session?.user.name}</h2>
        <h4 className="text-gray-600 text-sm">{session?.user.email}</h4>
      </div>

      <div className="mb-3 border border-gray-300 cursor-pointer rounded-md bg-white">
        <div className="flex p-2 justify-between hover:bg-gray-200 rounded-md">
          <p className="text-gray-600 text-xs font-semibold">
            Who viewed your profile
          </p>
          <p className="font-semibold text-[#0a66c2] text-xs">35</p>
        </div>
        <div className="flex p-2 justify-between hover:bg-gray-200 rounded-md">
          <p className="text-gray-600 text-xs font-semibold">
            Views of your post
          </p>
          <p className="font-semibold text-xs text-[#0a66c2]">268</p>
        </div>
        <div className="flex flex-col items-start border border-gray-200 p-2 hover:bg-gray-200 rounded-md">
          <p className="text-xs">Access exclusive tools &amp; insights</p>
          {recentTopics("Try Premium for free", BsSquareFill, "active")}
        </div>
        <div className="flex border border-gray-200 p-2 justify-between hover:bg-gray-200 rounded-md">
          {recentTopics("My Items", BsFillBookmarkFill)}
        </div>
      </div>

      <div className="text-left p-3 border border-gray-300 rounded-md mt-3 bg-white">
        <p className="text-sm pb-3 flex items-center justify-between group">
          <span>Recent</span>
          <span className="hidden group-hover:inline">
            <BsChevronCompactDown />
          </span>
        </p>
        {recentItem("programming")}
        {recentItem("reactjs")}
        {recentItem("happiness")}
        {recentItem("gaming")}
        {recentItem("design")}
        {recentItem("android")}
        <p className="text-sm pb-1 flex items-center justify-between group mt-4 group">
          <span className="text-blue-600 group-hover:underline">Groups</span>
          <span className="hidden group-hover:inline">
            <BsChevronCompactDown />
          </span>
        </p>
        {recentTopics("FOSSASIA", HiUserGroup)}
        <p className="text-sm pb-1 flex items-center justify-between group mt-4 group">
          <span className="text-blue-600 group-hover:underline">Event</span>
          <span>
            <HiPlus />
          </span>
        </p>
        <p className="text-sm pb-1 flex items-center justify-between group mt-4 group">
          <span className="text-blue-600 group-hover:underline">
            Followed Hashtags
          </span>
          <span className="hidden group-hover:inline">
            <BsChevronCompactDown />
          </span>
        </p>
        {recentItem("happiness")}
        {recentItem("health")}
        {recentItem("gaming")}
      </div>
      <p className="font-semibold text-sm text-center border border-t-0 border-gray-300 rounded-md p-2 bg-white cursor-pointer">
        Discover more
      </p>
    </div>
  );
}

export default LeftSidebar;
