const Selector = () => {
  return (
    <div className="d-flex gap-3">
      <input type="number" className="form-control" />
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default Selector;
