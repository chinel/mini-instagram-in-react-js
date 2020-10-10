import React, { useState } from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
  const [posts, setPost] = useState([
    {
      id: 1,
      userName: "Mary",
      imageUrl:
        "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
      caption: "First Caption",
    },
    {
      id: 2,
      userName: "Jane",
      imageUrl: "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
      caption: "Second Caption",
    },
    {
      id: 3,
      userName: "Paul",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      caption: "Third Caption",
    },
  ]);
  return (
    <div className="app">
      {/**Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Posts
          key={post.id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
