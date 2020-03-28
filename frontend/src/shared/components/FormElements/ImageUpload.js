import React from "react";
import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = props => {
  return (
    <div className="form-control">
      <input
        type="file"
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
