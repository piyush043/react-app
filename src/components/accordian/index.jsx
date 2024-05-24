import React from "react";
import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(()=>new Set());
  const [isMultiple, setIsMultiple] = useState(false);

  function handleSelection(currId) {
    let currSelected = new Set(selected);
    if (currSelected.has(currId)) {
      currSelected.delete(currId);
    } else {
        if (isMultiple) {
            currSelected.add(currId);
        } else {
            currSelected = new Set([currId]);
        }
    }
    setSelected(currSelected);
    console.log(selected);
  }

  function getButtonText() {
    return isMultiple ? "Select Single": "Select Multiple";
  }

  const elements = data.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div onClick={() => handleSelection(item.id)} className="title">
          <h3>{item.question}</h3>
          <span> + </span>
        </div>
        {selected.has(item.id) ? <div className="content">{item.answer}</div>: null}
      </div>
    );
  });

  return (
    <div className="wrapper">
      <button onClick={() => setIsMultiple(!isMultiple)}>
        {getButtonText()}
      </button>
      <div className="accordian">{elements}</div>
    </div>
  );
};
export default Accordian;
