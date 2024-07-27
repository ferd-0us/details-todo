import React, { useState } from "react";
import "./style.css";
import Input from "./components/Input";
import Lists from "./components/Lists";
import Form from "./components/Form";

function App() {
  const [details, setDetails] = useState([]);

  function addDetail(detail) {
    setDetails((prevDetails) => {
      return [...prevDetails, detail];
    });
  }
  return (
    <div className="container">
      <div className="main-container">
        <Input />
        <Form onAdd={addDetail}/>
      </div>
      {details.map((detailItem) => {
        return (
          <Lists
            fName={detailItem.fName}
            programe={detailItem.programe}
            subject={detailItem.subject}
            nid={detailItem.nid}
          />
        );
      })}
    </div>
  );
}

export default App;
