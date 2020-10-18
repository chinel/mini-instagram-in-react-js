import React, { useState, useEffect } from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

function Posts({ postId, userName, imageUrl, caption }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => {
              doc.data();
            })
          );
        });
    }
  }, [postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__headerAvatar"
          alt={userName}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>

      <img className="post__image" src={imageUrl} />
      <h4 className="post__text">
        <strong>{userName}</strong> {caption}
      </h4>
    </div>
  );
}

export default Posts;
