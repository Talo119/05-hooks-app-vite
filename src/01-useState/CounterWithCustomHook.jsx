import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrease} = useCounter(5);

  return (
    <>
        <h1>Counter With Custom Hook: { counter }</h1>
        <hr />
        <button className="btn btn-success" onClick={ () => increment(5)}>+1</button>
        <button className="btn btn-dark" onClick={ reset }>Reset</button>
        <button className="btn btn-danger" onClick={ () => decrease(5) }>-1</button>
    </>
  )
}
