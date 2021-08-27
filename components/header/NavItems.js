import Image from "next/image";

function NavItems({ Icon, avatar, title, onClick, active, Down }) {
  return (
    <div
      className={`flex flex-col w-full items-center cursor-pointer group md:hover:border-b-2 ${
        active && "md:border-b-2"
      } border-gray-600 md:pb-3 md:mt-2`}
      onClick={onClick}
    >
      {Icon && (
        <Icon className="h-5 w-5 group-hover:scale-110 transition duration-150 ease-in rounded-full" />
      )}
      {avatar && (
        <Image
          src={`/images/user.svg`}
          alt={title}
          height="20"
          width="20"
          className="group-hover:scale-110 transition duration-150 ease-in"
        />
      )}
      <h3 className="hidden xl:flex items-center">
        {title} {Down && <Down className="h-4 w-4 text-black" />}
      </h3>
    </div>
  );
}

export default NavItems;
