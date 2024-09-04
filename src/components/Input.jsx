import { useState } from "react";

function Input() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-list mt-20 mx-auto text-center h-auto w-full max-w-lg p-8 rounded-lg shadow-lg border border-gray-300 bg-gradient-to-r from-indigo-400 to-cyan-400">
        <h1 className="text-black text-4xl font-bold mb-8">Todo List</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Enter your todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-white px-4 py-2 border-2 border-gray-300 rounded-l-lg w-3/4  "
          />
          <button
            onClick={handleAdd}
            className="px-8 py-2 bg-blue-600 text-white rounded-r-lg "
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-1 rounded-lg  "
            >
              <span className="text-lg ">{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Input;
