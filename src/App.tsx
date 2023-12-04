import { useState, ChangeEvent } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import CurrencySelector from "./components/CurrencySelector";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [fromCurrency, setFromCurrency] = useState<number>(1);
  const [fromCurrencySelected, setFromCurrencySelected] = useState<string>("USD");
  const [toCurrencySelected, setToCurrencySelected] = useState<string>("USD");

  const { data: currency } = useCurrency(fromCurrencySelected);

  const conversionRate = currency?.conversion_rates?.[toCurrencySelected] || 0;
  const toCurrency = isNaN(fromCurrency) || isNaN(conversionRate)
    ? 0
    : fromCurrency * conversionRate;

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromCurrency(parseFloat(e.target.value));
  };

  const handleFromCurrencySelect = (currency: string) => {
    setFromCurrencySelected(currency);
  };

  const handleToCurrencySelect = (currency: string) => {
    setToCurrencySelected(currency);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center gap-3"
      style={{ height: "100vh", background: "red" }}
    >
      <h1>Currency Converter</h1>
      <h2>from</h2>
      <div className="d-flex gap-3">
        <input
          value={fromCurrency}
          type="number"
          className="form-control"
          onChange={handleFromCurrencyChange}
        />
        <CurrencySelector onSelect={handleFromCurrencySelect} />
      </div>

      <FaExchangeAlt size={40} />
      <h2>to</h2>
      <div className="d-flex gap-3">
        <input
          value={toCurrency}
          type="number"
          className="form-control"
          disabled
        />
        <CurrencySelector onSelect={handleToCurrencySelect} />
      </div>
    </div>
  );
}

export default App;
