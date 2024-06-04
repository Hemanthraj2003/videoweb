import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const setCreate = () => {
    navigate("/xyzupload");
  };
  const setRead = () => {
    navigate("/xyzRead");
  };

  return (
    <div className="container-sm">
      <div className="d-flex container-sm justify-content-between p-5">
        <div className="btn btn-primary" onClick={() => setCreate()}>
          CREATE
        </div>
        <div className="btn btn-primary" onClick={() => setRead()}>
          read
        </div>
      </div>
      <div className="p-5 border"></div>
    </div>
  );
}

export default App;
