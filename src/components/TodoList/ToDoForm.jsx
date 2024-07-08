import { useState } from "react";

export const ToDoForm = ({ addToDo }) => {
  const [toDoText, setToDoText] = useState("");

  const handleAdd = () => {
    addToDo(toDoText);
    setToDoText("");
  };

  return (
    <>
      <h1>Add your todo</h1>
      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="todo-box"
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </form>
    </>
  );
};

/* 
1. Take a input box, if user clicks on add 
2. todo needed to added below , and input needs to set to empty
3. todo should contain id field, checkbox, description and completed
4. if checkbox is ticked , mark the todo discuritption with one line through
5. should have delete option
6. should have edit option
7. on Click of edit , description should provided in input field and edit button need to changed to update btn
8. on click of update it should be back to list and update btn should change to edit btn again
*/
