import { useCounter, useFetch } from "../hooks";
import { LoadingQuote,  QuoteComponent } from "./";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const {data, isLoading, hahsError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        
        {
            (isLoading)
                ? (
                    <LoadingQuote />
                )
                : (
                    <QuoteComponent author={author} quote={quote} />
                )

        }

        <button 
            className="btn btn-primary"
            onClick={ () => increment(1) }
            disabled={ isLoading }
        >
            Next Quote
        </button>

    </>
  )
}
