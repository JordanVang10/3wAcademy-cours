
// import Counter from "./component/Counter" ;
// import SayHi from "./component/SayHi";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
    {/* <Counter label={'je suis un conteur'} ></Counter>

    <SayHi name={'Michael'} job={'Developpeur'} statut={'Alive'} ></SayHi>
    <SayHi name={'Adam'} job={'Fils de Dieu'} statut={'unknown'} ></SayHi> */}


      <div className="bg-red-400">
      <button
          onClick={() => setCount(count + 1)}>
          +
        </button>
        <p>{count}</p>
        <button
          onClick={() => setCount(count - 1)}>
          -
            </button>
      </div>
    </div>
  );
}

export default App;