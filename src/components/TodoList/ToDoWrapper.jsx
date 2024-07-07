import { useState } from "react";
import { ToDoForm } from "./ToDoForm";

export const ToDoWrapper = () => {
  const [listToDo, setListToDo] = useState([]);
  const [editId, setEditId] = useState(null);

  const createNewTask = (toDoText) => {
    let newTask = {
      id: listToDo.length,
      title: toDoText,
      isCompleted: false,
      isEditable: editId ? "Update" : "Edit",
    };
    return newTask;
  };

  const addToDo = (toDoText) => {
    setListToDo([...listToDo, createNewTask(toDoText)]);
  };

  const handleCheck = (e, id) => {
    const isChecked = e.target.checked;
    const updatedToDo = listToDo.map((todo, ind) =>
      todo.id === id ? { ...todo, isCompleted: isChecked } : todo
    );
    setListToDo(updatedToDo);
  };

  const handleDelete = (id) => {
    const updatedTodo = listToDo.filter((todo) => todo.id !== id);
    setListToDo(updatedTodo);
  };

  const handleEdit = (toDo) => {
    setEditId(toDo.id);
    if (toDo.isEditable === "Update") {
      setEditId(null);
      const updatedToDo = listToDo.map((todo, ind) =>
        todo.id === toDo.id ? { ...todo, isEditable: "Edit" } : todo
      );
      setListToDo(updatedToDo);
    }
  };

  const handleEditText = (e, id) => {
    const updatedToDo = listToDo.map((todo, ind) =>
      todo.id === id
        ? { ...todo, title: e.target.value, isEditable: "Update" }
        : todo
    );
    setListToDo(updatedToDo);
  };

  return (
    <>
      <ToDoForm addToDo={addToDo} />

      {listToDo.length > 0 && (
        <ul>
          {listToDo.map((toDo, ind) => {
            return (
              <div className="list-toDo" key={toDo.id}>
                <input
                  type="checkbox"
                  value={toDo.isCompleted}
                  onChange={(e) => handleCheck(e, toDo.id)}
                />
                {editId === toDo.id ? (
                  <input
                    type="text"
                    value={toDo.title}
                    onChange={(e) => handleEditText(e, toDo.id)}
                  />
                ) : (
                  <li
                    className={`list-item ${
                      toDo.isCompleted ? "completed" : "not-completed"
                    }`}
                  >
                    {toDo.title}
                  </li>
                )}
                <button className="edit-btn" onClick={(id) => handleEdit(toDo)}>
                  {toDo.isEditable}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(toDo.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};

/* 
onClick of edit => 
  input box should come inplace of list
  edit button should be replaced with update
  once update is clicked it should be back to list and again button should be changed to Edit

*/
