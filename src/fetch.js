import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Fetch = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isApp, setIsApp] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "urls", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Document does not exist!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  const handleOpenApp = () => {
    // Attempt to open the app via deep link
    window.location.href = "qdisk://" + window.location.href;

    // Set a timeout to check if the deep link was successful after a short delay
    setTimeout(() => {
      // Check if the user is still on the current page
      if (window.location.href.includes("/5fqkiXDtLFTSSLd9XGyN")) {
        const confirmation = window.confirm(
          "App not installed. Do you want to install the app?"
        );
        if (confirmation) {
          window.location.href = "/install_app";
        } else {
          window.alert("Cannot play without the app!!");
        }
      }
    }, 1200);
  };
  return (
    <div>
      {data ? (
        <div>
          <h2>Document Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>

          <button type="button" class="btn btn-warning" onClick={handleOpenApp}>
            Open in App
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fetch;
