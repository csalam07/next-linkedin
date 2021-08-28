import { GoPrimitiveDot } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Image from "next/image";

const newsArticle = (heading, subtitle) => (
  <div className="flex p-2  cursor-pointer hover:bg-gray-200">
    <p className="text-linkedin-blue ">
      <GoPrimitiveDot />
    </p>

    <div className="flex-grow">
      <h4 className="text-sm font-medium ml-1">{heading}</h4>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </div>
  </div>
);

function RightSidebar({ session }) {
  return (
    <div className="hidden flex-grow-0 lg:inline lg:flex-[0.4] sticky h-screen mt-[5%] space-y-2">
      <div className="bg-white border border-gray-300 pb-3 rounded-md">
        <div className="flex items-center justify-between border-b-0 p-3">
          <h2 className="text-sm font-semibold">LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </div>

        {newsArticle("Jobs galore at cloud talent", "13h ago · 404 readers")}
        {newsArticle(
          "OnlyFans reverse course, lifts ban",
          "1d ago · 47,424 readers",
        )}
        {newsArticle("Salary hikes make a comback", "3d ago · 21,404 readers")}
        {newsArticle("Out of job?Write this on CV", "4d ago · 29,404 readers")}
        {newsArticle(
          "Do you have other than job offer",
          "7d ago · 24,358 readers",
        )}

        <div className="flex rounded-md items-center mx-4 justify-start p-3 cursor-pointer hover:bg-gray-200">
          <h2 className="font-semibold text-sm">Show More</h2>
          <img src="/images/right-icon.svg" alt="" className="ml-2" />
        </div>
      </div>

      <div className="bg-white border border-gray-300 pb-3 rounded-md">
        <div className="flex items-center justify-between border-b-0 p-3">
          <h2 className="text-sm font-semibold">Today's top courses</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </div>

        {newsArticle(
          "Backgrounder:Leadership Conversation...",
          "American Negotiation Institute",
        )}
        {newsArticle("Well-Being in the Workplace...", "Careercake")}
        {newsArticle(
          "Articulating your value...",
          "Madecraft and Alessandra Wall",
        )}

        <div className="flex rounded-md items-center mx-4 justify-start p-3 cursor-pointer hover:bg-gray-200">
          <h2 className="font-semibold text-sm">More on LinkedIn Learning</h2>
          <img src="/images/right-icon.svg" alt="" className="ml-2" />
        </div>
      </div>

      <div className="bg-white border border-gray-300 pb-3 rounded-md">
        <div className="flex items-center justify-end border-b-0 p-3">
          <h2 className="flex items-center text-sm space-x-2 font-semibold">
            <span>Ad</span> <BiDotsHorizontalRounded />
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={session.user.image}
            height="80"
            width="80"
            objectFit="containe"
            className="rounded-full"
          />
          <Image
            src="/images/google.png"
            height="80"
            width="80"
            className="mx-auto"
            objectFit="containe"
            className="rounded-full"
          />
        </div>
        <p className="text-center m-2 text-sm py-2">
          {session.user.name.split(" ").slice(0, -1).join(" ")} , explore jobs
          at <span className="font-semibold">Google</span> that match your
          skills
        </p>
        <div className="flex mb-3">
          <button className="mx-auto border rounded-full border-gray-400 px-4 py-2 hover:shadow-md">
            See jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
