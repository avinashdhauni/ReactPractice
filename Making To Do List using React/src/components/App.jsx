import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addListItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addListItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
