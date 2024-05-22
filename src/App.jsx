import { useState } from "react";
import { Create, Read } from "./crd";
function App() {
  const [isCreate, setIsCreate] = useState(false);
  const [isRead, setIsRead] = useState(false);
  // const [isDelete, setIsDelete] = useState(false);
  const setCreate = () => {
    setIsCreate(true);
    setIsRead(false);
    // setIsDelete(false);
  };
  const setRead = () => {
    setIsCreate(false);
    setIsRead(true);
    // setIsDelete(false);
  };
  const setDelete = () => {
    setIsCreate(false);
    setIsRead(false);
    // setIsDelete(true);
  };
  return (
    <div className="container-sm">
      <div className="d-flex container-sm justify-content-between p-5">
        <div className="btn btn-primary" onClick={() => setCreate()}>
          CREATE
        </div>
        <div className="btn btn-primary" onClick={() => setRead()}>
          READ
        </div>
        <div className="btn btn-primary" onClick={() => setDelete()}>
          DELETE
        </div>
      </div>
      <div className="p-5 border">
        {isCreate && <Create />}
        {isRead && <Read />}
        {/* {isDelete && <Delete />} */}
      </div>
    </div>
  );
}

export default App;
