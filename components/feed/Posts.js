import Post from "./Post";

function Posts({ session }) {
  return (
    <div className="mb-6">
      <Post
        key="1"
        name={session.user.name}
        message="Hi I am hard coded text. Tomorrow I will be showing up dynamically from the database."
        email={session.user.email}
        timestamp="1m ago"
        image={session.user.image}
        postImage="/github.png"
      />

      <Post
        key="2"
        name={session.user.name}
        message="Hi I am hard coded text. Tomorrow I will be showing up dynamically from the database."
        email={session.user.email}
        timestamp="1 hr ago"
        image={session.user.image}
        postImage="/github.png"
      />
    </div>
  );
}

export default Posts;
