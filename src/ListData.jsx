import React from "react";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const urlCollectRef = collection(db, "urls");

const ListData = ({ rawData }) => {
  const handleSubmit = async () => {
    const docRef = await addDoc(urlCollectRef, rawData);
    console.log("Document added with ID: ", docRef.id);
    alert(docRef.id); // Return the ID if needed
    rawData = null;
  };
  return (
    <div className="my-5 text-secondary">
      <div>Video: {rawData.video}</div>
      {Object.entries(rawData).map(([key, value]) => {
        if (key.startsWith("audio")) {
          return <div key={key}>Audio: {value}</div>;
        }
        if (key.startsWith("sub")) {
          return <div key={key}>Subtitle: {value}</div>;
        }
        return null; // Ignore other keys
      })}
      <button
        className="btn btn-warning position-absolute bottom-0 end-0 m-4"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

export default ListData;
