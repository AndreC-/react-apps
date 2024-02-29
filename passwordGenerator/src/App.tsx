import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSymbols, setAllowSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowNumbers) allowedCharacters += "0123456789"
    if (allowSymbols) allowedCharacters += "!@#$%^&*()_-+="

    for(let i = 0; i < length; i++){
      const char = Math.floor(Math.random() * allowedCharacters.length)
      pass += allowedCharacters.charAt(char)
    }
    setPassword(pass);
  }, [length, allowNumbers, allowSymbols]);

  useEffect(() => {
    generatePassword()
  }, [length, allowNumbers, allowSymbols, generatePassword])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor='length'>Length: {length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={allowNumbers} onChange={() => setAllowNumbers((prev) => !prev)}/>
          <label htmlFor='numbers'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={allowSymbols} onChange={() => setAllowSymbols((prev) => !prev)}/>
          <label htmlFor='symbols'>Symbols</label>
        </div>
      </div>

    </div>
  )
}

export default App
