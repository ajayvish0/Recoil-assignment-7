// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";

import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import TodosState, { FilterTodo, Filtering } from "./RR";
import { useState } from "react";

function App() {
  return (
    <RecoilRoot>
      <CreateTodo />
      <Filterr />
      <TodoRender />
    </RecoilRoot>

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/Dashboard" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

function Filterr() {
  const setFilter = useSetRecoilState(FilterTodo);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        placeholder="Filter"
      />
    </div>
  );
}
function CreateTodo() {
  const setTodos = useSetRecoilState(TodosState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
      />
      <button
        onClick={() => {
          setTodos((oldTodos) => [
            ...oldTodos,
            { title: title, description: description },
          ]);
        }}
      >
        Add
      </button>
    </div>
  );
}

function TodoRender() {
  const currentTodo = useRecoilValue(Filtering);
  // const filterTodo = useRecoilValue();
  if (!currentTodo) {
    return <div>No todos available.</div>;
  }

  return (
    <div>
      {currentTodo.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate("/")}>Home</button>
//       <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
//     </div>
//   );
// }

export default App;
