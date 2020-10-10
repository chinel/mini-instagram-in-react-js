import React from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
function Posts() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__headerAvatar"
          alt="TestUserName"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <h4 className="post__text">
        <strong>Username</strong> Caption
      </h4>
    </div>
  );
}

export default Posts;
