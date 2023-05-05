import { useState } from "react";
import AccordionDemo from "@/components/test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <AccordionDemo />
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
