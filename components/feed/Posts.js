import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import FlipMove from "react-flip-move";

function Posts({ session, posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc"),
  );
  return (
    <div className="mb-6">
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <FlipMove>
              <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
              />
            </FlipMove>
          ))
        : posts?.map((post) => (
            <FlipMove>
              <Post
                key={post.id}
                name={post.name}
                message={post.message}
                email={post.email}
                timestamp={post.timestamp}
                image={post.image}
                postImage={post.postImage}
              />
            </FlipMove>
          ))}
    </div>
  );
}

export default Posts;
