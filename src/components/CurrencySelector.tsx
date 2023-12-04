import useCurrencies from '../hooks/useCurrencies'

interface Props {
    onSelect: (currency: string) => void
}

const CurrencySelector = ({onSelect}:Props) => {
    const {data: currencies} = useCurrencies()
  return (
    <select className="form-select" aria-label="Default select example" onChange={(e) => onSelect(e.target.value)}>
    {currencies?.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
  )
}

export default CurrencySelector