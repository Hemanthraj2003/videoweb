import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Fetch = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

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
    try {
      // Attempt to open the app via deep link
      window.location.href = "qdisk://" + window.location.href;
    } catch (error) {
      // If an error occurs, redirect the user to the fallback page
      window.location.href = "/install_app"; // Replace with the URL of your fallback page
    }
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
