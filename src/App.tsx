import Selector from "./components/Selector";
import { FaExchangeAlt } from "react-icons/fa";

function App() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center gap-3"
      style={{ height: "100vh", background: "red" }}
    >
      <h1>Currency Converter</h1>
      <Selector />
      <FaExchangeAlt size={40}/>
      <Selector />
    </div>
  );
}

export default App;
