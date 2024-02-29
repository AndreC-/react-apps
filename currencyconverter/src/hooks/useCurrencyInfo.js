import { useEffect, useState } from "react";
import currencies from "../currencies.json"


// function useCurrencyInfo(currency)  {
//     const [data, setData] = useState({});
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currency/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//     }, [currency])

//     return data;
// }

function useCurrencyInfo(currency)  {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(currencies[currency])
    }, [currency])

    console.log(data);

    return data;
}

export default useCurrencyInfo