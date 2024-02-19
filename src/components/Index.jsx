import React, { useState } from "react";
import "./Styles.css";
import data from "./data.js";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurretId) => {
    setSelected(getCurretId === selected ? null : getCurretId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMutiple = [...multiple];
    const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId);
  };

  return (
    <div className="acc-wrapper">
      <h3>Accordion Component</h3>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="acc-content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

export default Index;
