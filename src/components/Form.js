import React, { useState } from "react";

function Form(props) {
  const [detail, setDetail] = useState({
    fName: "",
    programe: "",
    subject: "",
    nid: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetail((prevDetail) => {
      return {
        ...prevDetail,
        [name]: value,
      };
    });
  }

  function submitDetails(event) {
    props.onAdd(detail);
    setDetail({
      fName: "",
      programe: "",
      subject: "",
      nid: "",
    });
    event.preventDefault();
  }
  return (
    <div className="form">
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={detail.fName}
          className="input-container"
          placeholder="Name with Initials"
          type="text"
        />
        <input
          name="programe"
          onChange={handleChange}
          value={detail.programe}
          className="input-container"
          placeholder="science/Arts/Commerce"
          type="text"
        />
        <input
          name="subject"
          onChange={handleChange}
          value={detail.subject}
          className="input-container"
          placeholder="Experinced Subject"
          type="text"
        />
        <input
          name="nid"
          onChange={handleChange}
          value={detail.nid}
          className="input-container"
          placeholder="Contact Number"
          type="text"
        />
        <button type="submit" className="add-button" onClick={submitDetails}>
          Submit Now
        </button>
      </form>
    </div>
  );
}

export default Form;
