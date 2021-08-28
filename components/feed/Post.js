import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaHandshake } from "react-icons/fa";
import { HiOutlineChatAlt } from "react-icons/hi";
import { BsArrow90DegRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
function Post({ name, message, postImage, image, timestamp }) {
  console.log(postImage);
  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium flex">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {timestamp}
                {/* {new Date(timestamp?.toDate()).toLocaleString()} */}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <img
          src={postImage}
          alt=""
          className="object-cover bg-white"
          loading="lazy"
        />
      )}
      <div className="flex space-x-2 p-2 text-xs md:text-sm items-center bg-white">
        <AiFillLike className="h-4 text-blue-400" />
        <FcLike className="h-4" />
        <FaHandshake className="h-4 text-green-400" />
        <p className="text-gray-400">110 • 5 comments</p>
      </div>
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
        <div className="inputIcon rounded-none rounded-bl-2xl hover:bg-gray-200">
          <AiFillLike className="h-4 text-blue-500" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none hover:bg-gray-200">
          <HiOutlineChatAlt className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl hover:bg-gray-200">
          <BsArrow90DegRight className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl hover:bg-gray-200">
          <FiSend className="h-4" />
          <p className="text-xs sm:text-base">Send</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
