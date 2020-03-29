import React, { useRef, useState } from "react";
import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  const pickedHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    props.onInput(props.id, pickedFile, isValid)
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
