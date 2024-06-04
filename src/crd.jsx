import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
const urlCollectRef = collection(db, "urls");

export const Read = () => {
  const [urlData, setUrlData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(urlCollectRef);
      setUrlData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  useEffect(() => {
    console.log(urlData);
  }, [urlData]);
  const handleCopyButtonClick = (docID) => {
    const text = "https://qdisk.netlify.app/id/" + docID;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };
  return (
    <div>
      URL DATA
      <br />
      {urlData.map((doc) => {
        return (
          <div key={doc.id} className="w-100 p-3 m-2 bg-secondary">
            <div className="d-inline-flex flex-row">
              <input
                type="text"
                value={`qdisk.netlify.app/id/${doc.id}`}
                className="form-control"
              />
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleCopyButtonClick(doc.id)}
              >
                Copy Text
              </button>
            </div>
            <div>Title: {doc.title}</div>
            <div>url: {doc.url}</div>
          </div>
        );
      })}
    </div>
  );
};
