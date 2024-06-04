import React, { useState } from "react";
import ListData from "./ListData.jsx";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        alert("Upload Successful");
      }
      console.log(responseData);
      if (responseData) {
        setIsProcessed(true);
        const newData = responseData.uploadedResults;
        setData({ title: newData.fileName, url: newData.url });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex w-100 h-100 align-items-center justify-content-center my-5   flex-column">
      <div className="d-inline-flex flex-column w-100 align-items-center justify-content-center bg-dark p-5">
        <div className="mb-3 fs-1 text-warning">UPLOAD HERE</div>
        <div className="input-group mx-5 px-5 w-50">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            name="video"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="input-group-text"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
      <div
        className="d-flex bg-dark text-white p-5 my-5 overflow-hidden flex-column position-relative rounded-5"
        style={{ height: "400px", width: "800px" }}
      >
        <div>LIST OF URLS</div>
        <div className="flex-grow-1">
          {isProcessed && <ListData rawData={data} />}
        </div>
      </div>
    </div>
  );
};

export default Upload;
