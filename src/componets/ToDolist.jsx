import React, { useState } from "react";

function ToDolist() {
  const [toDoLists, setTodoLists] = useState([]);

  const handleAddTask = () => {
    const toDoInput = document.getElementById("to-do-input");
    const task = toDoInput.value.trim();
    if (task !== "") {
      setTodoLists([...toDoLists, task]);
      toDoInput.value = "";
    }
  };

  const handleMoveUp = (index) =>{
    if(index>0){
        const tasks = [...toDoLists];
        [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
        setTodoLists(tasks);
    }   
  }

  const handleMoveDown = (index) =>{
    if (index < toDoLists.length - 1) {
      const tasks = [...toDoLists];
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
      setTodoLists(tasks);
    }  
  }
  const handleRemoveTask = (index) => {
    setTodoLists((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title} >📝 To Do List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          id="to-do-input"
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      <ul style={styles.list}>
        {toDoLists.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <h3 style={{ margin: 0 ,color:"black"}}>{task}</h3>
            <div style={styles.controls}>
              <span
                onClick={() => handleRemoveTask(index)}
                style={styles.delete}>
                ❌
              </span>
              <span style={styles.action} onClick={()=>handleMoveUp(index)}>⬆️</span>
              <span style={styles.action} onClick={()=>handleMoveDown(index)}>⬇️</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    background:"black"
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flexGrow: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controls: {
    display: "flex",
    gap: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
  delete: {
    color: "red",
  },
  action: {
    color: "#555",
  },
};

export default ToDolist;
