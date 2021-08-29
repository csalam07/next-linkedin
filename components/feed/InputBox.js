import Image from "next/image";
import { BiCalendarStar } from "react-icons/bi";
import { HiPhotograph, HiViewBoards } from "react-icons/hi";
import { ImPlay } from "react-icons/im";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase";

function InputBox({ session }) {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        verifiedUser: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => alert(error),
            () => {
              // when the uploads completed
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true },
                  );
                });
            },
          );
        }
      });

    inputRef.current.value = "";
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 bg-clip-border">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full focus:shadow-md h-12 border border-gray-300 hover:bg-gray-100 flex-grow px-5 focus:outline-none bg-clip-padding"
            type="text"
            placeholder="Start a post"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <HiPhotograph className="h-7 text-blue-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <ImPlay className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Video</p>
        </div>

        <div className="inputIcon">
          <BiCalendarStar className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Event</p>
        </div>
        <div className="inputIcon">
          <HiViewBoards className="h-7 text-red-300" />
          <p className="text-xs sm:text-sm xl:text-base">Write article</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
