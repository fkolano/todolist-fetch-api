import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const Home = () => {
  const [todoList, setToDoList] = useState(["Do Homework",
  "Do Laundry",
  "Walk the Dog"]);
  const newToDoList = todoList.map((item, i) => {
    return (
      <div key={i}>
        <li>
          {item} <button onClick={() => deleteToDoList(i)}>x</button>
        </li>
      </div>
    );
  });
  const deleteToDoList = (index) => {
    const newArray = todoList.filter((item, i) => i != index);
    setToDoList(newArray);
  };
  const newToDo = (onKeyDownEvent) => {
    if (onKeyDownEvent.keyCode === 13) {
      let click = onKeyDownEvent.target.value;
      const todo = [...todoList, click];
      setToDoList(todo);
      onKeyDownEvent.target.value = "";
      
    }
  };

  return (
    <div className="container justify-content-center">
      <h1>todos</h1>
      <input
        placeholder="What needs to be done"
        onKeyDown={newToDo}
        type="text"
      ></input>
      <ul>{newToDoList}</ul>
    </div>
  );
};
