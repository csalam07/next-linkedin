import LeftSidebar from "../components/leftside/LeftSidebar";
import Feed from "../components/feed/Feed";
import RightSidebar from "../components/rightside/RightSidebar";
import { getSession, signOut } from "next-auth/client";
import Login from "../components/auth/Login";

function Home({ session }) {
  if (!session) return <Login />;

  return (
    <section className="flex flex-1 items-center mx-2 md:mt-10">
      <LeftSidebar session={session} />
      <Feed session={session} />
      <RightSidebar session={session} />
    </section>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
