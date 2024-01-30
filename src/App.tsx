import "./App.css";
import { useCounterStore } from "./store/counter";

function App() {
  console.log("组件渲染了");
  const str = useCounterStore((state) => state.str);
  const updateStr = useCounterStore((state) => state.updateStr);
  return (
    <>
      <div>value: {str}</div>
      <input onChange={(e) => updateStr(e.currentTarget.value)} value={str} />
    </>
  );
}

export default App;
