import React from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
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
      <Posts />
      {/**Posts */}
      {/**Post */}
    </div>
  );
}

export default App;
