import LeftSidebar from "../components/leftside/LeftSidebar";
import Feed from "../components/feed/Feed";
import RightSidebar from "../components/rightside/RightSidebar";
import { getSession, signOut } from "next-auth/client";
import Login from "../components/auth/Login";

function Home({ session }) {
  if (!session) return <Login />;

  return (
    <section className="flex flex-1 items-center">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
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
