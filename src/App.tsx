import Selector from "./components/Selector";
import { FaExchangeAlt } from "react-icons/fa";


const BASE_URL = "https://v6.exchangerate-api.com/v6/1209896fa7f068e468cca43a/latest/"
const data = ["USD", "GBP", "EUR"];

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center gap-3"
      style={{ height: "100vh", background: "red" }}
    >
      <h1>Currency Converter</h1>
      <Selector options={data} />
      <FaExchangeAlt size={40} />

      <Selector options={data} />
    </div>
  );
}

export default App;
