import React, { useState } from "react";
import "./Styles.css";
import data from "./data.js";

// Single selection
// Multiple Selection
const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSlection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.slice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSlection(!enableMultiSelection)}>
        Enable Multiple Selection
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
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="acc-content">
                  <p>{dataItem.answer}</p>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
};

export default Index;
