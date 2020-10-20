import React, { useState, useEffect } from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

function Posts({ postId, user, userName, imageUrl, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => {
            console.log(doc.data());
            return {
              id: doc.id,
              comments: doc.data(),
            };
          })
        )
      );

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    console.log(comments);
    event.preventDefault();
    console.log(postId);

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

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

      <img className="post__image" src={imageUrl} alt={caption} />
      <h4 className="post__text">
        <strong>{userName}</strong> {caption}
      </h4>

      <div className="post-comments">
        {comments &&
          comments.length > 0 &&
          comments.map(({ id, comments }) => (
            <p key={id}>
              <strong>{comments.username}</strong> {comments.text}
            </p>
          ))}
      </div>
      <form className="post__commentBox" onSubmit={postComment}>
        <input
          type="text"
          className="post__input"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button disabled={!comment} type="submit" className="post__button">
          Post
        </button>
      </form>
    </div>
  );
}

export default Posts;
