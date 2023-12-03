interface Props {
  options: string[];
}

const Selector = ({ options }: Props) => {
  return (
    <div className="d-flex gap-3">
      <input type="number" className="form-control" />
      <select className="form-select" aria-label="Default select example">
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default Selector;
