import { Input } from "./components/Input";
import { OrderList } from "./components/OrderList";
import { useTodoData } from "./hooks/useTodoData";


export default function App () {
  const {
    handleChange,
    handleClick,
    inputValue,
    tasks,
    handleClear,
    handleDone,
  } = useTodoData();

  return (
    <div className="App">
      <h1>Todo list</h1>
      <Input
        inputValue={ inputValue }
        handleChange={ handleChange }
        handleClick={ handleClick }
      />

      <div className="todo">
        <OrderList
          tasks={ tasks }
          handleClear={ handleClear }
          handleDone={ handleDone }
        />
      </div>
    </div>
  );
}
