import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fetch = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (clicked && document.visibilityState === "hidden") {
        setOpened(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [clicked]);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        if (!opened) {
          alert("not installed");
          navigate("/install_app");
        }
        setClicked(false); // Reset clicked state
      }, 1000); // Adjust the timeout duration as needed

      return () => clearTimeout(timer);
    }
  }, [clicked, opened, navigate]);

  useEffect(() => {
    if (opened) {
      alert("installed");
      setClicked(false); // Reset clicked state
      setOpened(false); // Reset opened state
    }
  }, [opened]);

  const handleOpenApp = () => {
    setClicked(true);
    window.location.href = "qdisk://" + window.location.href;
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-brand btn btn-link"
            onClick={() => navigate("/")}
            style={{ textDecoration: "none" }}
          >
            Q-Player
          </button>
        </div>
      </nav>

      <div className="bg-black p-5 text-center position-relative">
        <div
          className="bg-transparent rounded-circle p-3 mx-auto"
          style={{ width: "200px", height: "200px" }}
        >
          <i
            className="bi bi-play-circle-fill text-white position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "100px",
            }}
          ></i>
        </div>
        <button
          type="button"
          className="btn btn-outline-light btn-lg position-absolute top-50 start-50 translate-middle"
          onClick={handleOpenApp}
        >
          Play
        </button>
      </div>

      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleOpenApp}
        >
          Open in App
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOpenApp}
        >
          Play Video
        </button>
      </div>
    </div>
  );
};

export default Fetch;
