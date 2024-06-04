import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "QdiskAdmin" && password === "yourpassword") {
      setShowLoginModal(false);
      setError("");
      nav("/secret");
    } else {
      setError("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div
      style={{ backgroundColor: "#3f403e", color: "#ffd700", height: "100vh" }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-brand btn btn-link"
            onClick={() => nav("/")}
            style={{ textDecoration: "none", color: "#ffd700" }}
          >
            Q-cloud
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#ffd700" }}>
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLoginModal(false)}
                  style={{ color: "#ffd700" }}
                ></button>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                    style={{ color: "#ffd700" }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ backgroundColor: "#383838", color: "#ffd700" }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "#ffd700" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: "#383838", color: "#ffd700" }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowLoginModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Body Section */}
      <div
        className="container"
        style={{ padding: "20px", borderRadius: "5px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <h2>Welcome to Q-cloud</h2>
            <p className="lead">
              Q-cloud is a video hosting platform that helps users monetize
              their videos. With our platform, you can earn money based on the
              traffic to your videos. Whether you're a content creator,
              influencer, or business owner, Q-cloud provides you with the tools
              you need to succeed.
            </p>
            <p className="lead">
              Sign up today and start earning money from your videos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
