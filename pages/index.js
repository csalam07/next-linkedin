import { getSession } from "next-auth/client";
import LeftSidebar from "../components/leftside/LeftSidebar";
import Feed from "../components/feed/Feed";
import RightSidebar from "../components/rightside/RightSidebar";
import Login from "../components/auth/Login";
import { db } from "../firebase";

function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <section className="flex flex-1 items-center mx-2 md:mt-10">
      <LeftSidebar session={session} />
      <Feed session={session} posts={posts} />
      <RightSidebar session={session} />
    </section>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
