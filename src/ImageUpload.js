import React, { useState } from "react";
import { Button } from "@material-ui/core";

const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
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
