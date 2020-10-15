import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";
import firebase from "firebase";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleFileChange = (e) => {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post the image url in the database
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter caption...."
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <Button className="imageUpload__button" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;
