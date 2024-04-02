import { atom, selector } from "recoil";

const TodosState = atom({
  key: "TodosState",
  default: [],
});

const FilterTodo = atom({
  key: "FilterTodo",
  default: "",
});
const Filtering = selector({
  key: "Filtering",
  get: ({ get }) => {
    const filter = get(FilterTodo);
    const todos = get(TodosState);
    return todos.filter((todo) => todo.title.includes(filter));
  },
});

export default TodosState;
export { FilterTodo, Filtering };
