import { useState, ChangeEvent } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import CurrencySelector from "./components/CurrencySelector";
import useCurrency from "./hooks/useCurrency";

interface Conversion {
  fromCurrency: number;
  fromCurrencySelected: string;
  toCurrencySelected: string;
  toCurrency: number;
}

function App() {
  const [fromCurrency, setFromCurrency] = useState<number>(1);
  const [fromCurrencySelected, setFromCurrencySelected] =
    useState<string>("USD");
  const [toCurrencySelected, setToCurrencySelected] = useState<string>("USD");
  const [conversionHistory, setConversionHistory] = useState<Conversion[]>([]);

  const { data: currency } = useCurrency(fromCurrencySelected);

  const conversionRate = currency?.conversion_rates?.[toCurrencySelected] || 0;
  const toCurrency =
    isNaN(fromCurrency) || isNaN(conversionRate)
      ? 0
      : fromCurrency * conversionRate;

  const handleFromCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromCurrency(parseFloat(e.target.value));
  };

  const handleFromCurrencySelect = (currency: string) => {
    setFromCurrencySelected(currency);
    console.log("handFrom", currency);
    setConversionHistory([
      ...conversionHistory,
      { fromCurrencySelected, fromCurrency, toCurrencySelected, toCurrency },
    ]);
  };

  const handleToCurrencySelect = (currency: string) => {
    setToCurrencySelected(currency);
    setConversionHistory([
      ...conversionHistory,
      { fromCurrencySelected, fromCurrency, toCurrencySelected, toCurrency },
    ]);
  };

  console.log(conversionHistory);
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
      <h2>Converstion History</h2>
      <ul>
        {conversionHistory.map((conversion, index) => (
          <li key={`${conversion}${index}`}>
            {conversion.fromCurrency} {conversion.fromCurrencySelected} to{" "}
            {conversion.toCurrency} {conversion.toCurrencySelected}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
