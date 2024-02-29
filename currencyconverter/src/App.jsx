import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index';
import currencies from './currencies.json'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('CAD');
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from);
  const options  = Object.keys(currencies);


  const convert = () => {
    setConvertedAmount(amount * currencyInfo)
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}} >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white-/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount)=> setAmount(amount)}
              selectedCurrency={from}/>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmountChange={(amount)=> setAmount(amount)}
              selectedCurrency={to}
              currencyDisabled={true}/>
            </div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
