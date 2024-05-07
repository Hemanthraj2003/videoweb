import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
const Create = () => {
  const [urlData, setUrlData] = useState([]);
  const urlCollectRef = collection(db, "urls");
  const [source, setSource] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(urlCollectRef);
      setUrlData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  const handleSubmitCreate = async () => {
    await addDoc(urlCollectRef, { title: source, url: url });
  };

  return (
    <div>
      <div>create</div>
      <div>
        Source
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <br />
        <br />
        URL
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmitCreate}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Create;
