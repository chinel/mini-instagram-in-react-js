import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Posts from "./Posts";
import Modal from "@material-ui/core/Modal";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, [posts]);

  return (
    <div className="app">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a body</h2>
          <SimpleModal />
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map(({ id, post }) => (
        <Posts
          key={id}
          userName={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
