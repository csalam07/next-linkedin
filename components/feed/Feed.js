import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed({ session, posts }) {
  return (
    <div className="flex flex-grow flex-[0.6] h-screen flex-col">
      <div className="text-sm font-medium xl:flex text-center mx-auto underline cursor-pointer group hidden h-4">
        <h5 className="text-blue-600 group-hover:text-black">
          GoDaddy Domain Transfers -
        </h5>
        <p>
          Your domain needs a reliable home online. Transfers to GoDaddy today.
          Ad &hellip;
        </p>
      </div>

      <div className="flex-grow mx-2 sm:mx-4 md:mx-6">
        <InputBox session={session} />
        <Posts posts={posts} session={session} />
      </div>
    </div>
  );
}

export default Feed;
