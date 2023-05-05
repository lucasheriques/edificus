import { useState } from "react";
import AccordionDemo from "@/components/test";
import { useQuery } from "../convex/_generated/react";

function App() {
  const [count, setCount] = useState(0);
  const tasks = useQuery("getTasks");

  return (
    <div className="bg-slate-900 text-white min-h-full">
      <main className="container py-8">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        {tasks?.map(({ _id, text }) => (
          <div key={_id.toString()}>{text}</div>
        ))}
        <p></p>
      </main>
    </div>
  );
}

export default App;
