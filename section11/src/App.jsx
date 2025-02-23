import {
  useCallback,
  useReducer,
  useRef,
  useState,
  createContext,
  useMemo,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// export const TodoContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // #3-1번 TodoStateContext가 변경이 되어서 리렌더링될 때마다 이 객체를 다시 생성될 것이기 때문에 -> useMemo로 기억해두어야함..
  // value={{ onCreate, onUpdate, onDelete }} 이런식으로 넣어주게 되면, 컴포넌트가 리렌더링 될 때마다 이 객체가 계속 다시 생성될 것임.
  // 하지만 원하는 건 변하지 않는 값들만 공급하는 것을 원함(그래서 만든게 memoizedDispatch임)
  // 그래서 useMemo로 다시 생성하지 않도록 감싸줬음.

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}> */}
      {/* #1번 TodoStateContext.Provider 생성 */}
      <TodoStateContext.Provider value={todos}>
        {/* #2번 TodoDispatchContext.Provider 생성 */}
        {/* #3-2번 vaule=에 useMome해둔 거 넣기*/}
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* </TodoContext.Provider> */}
    </div>
  );
}

export default App;
