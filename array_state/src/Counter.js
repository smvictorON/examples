const Counter = ({ id, value, increment, decrement }) => {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small"
          onClick={() => decrement(id)}>-</button>
        <button className="button is-success is-small"
          onClick={() => increment(id)}>+</button>
      </div>
    </div>
  );
}
export default Counter;
