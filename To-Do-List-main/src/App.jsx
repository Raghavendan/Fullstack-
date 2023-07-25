import React from "react";
import { useState } from "react";
import './App.css'

export default function App() {
  const [newInput, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (newInput === "") {
      alert("Enter a Task!");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newInput,
    };

    setItems((previousItems) => [...previousItems, item]);

    setInput("");
  };

  const deleteItems = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };
  return (
    <div id="Container">
      <div>
        <h1>To-Do-List</h1>
      </div>
      <div>
        {" "}
        <input
          type="text"
          value={newInput}
          placeholder="Enter Task..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn"
          onClick={() => {
            addItems();
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <button className="btn"
                  onClick={() => {
                    deleteItems(item.id);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
