import { TodoStateContext } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";
import { useContext, useMemo, useState } from "react";

const List = () => {
  //  const { todos } 구조 분해할당에서 왜 바로 변수에 담는 것으로 바뀐 것인지?
  // 이전에 Context에는 여러 객체들이 있었지만, 이제는 변하는 값인 todos만 있음..
  // 그래서 구조분해 할당이 아니라 그냥 value props로 전달된 값을 그대로 todos라는 변수로 꺼내서 사용할 수 있다.
  const todos = useContext(TodoStateContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const getAnalyzedData = () => {
    console.log("호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              // onUpdate={onUpdate} // TodoItem에서 직접 불러와서 사용할 것이기 때문에, 여기서부터 데이터를 가지고 가지 않아도 된다..
              // onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
