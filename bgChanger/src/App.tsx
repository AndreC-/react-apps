import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: colour}}>
      <div className='fixed flex flex-wrap justify-left bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap flex-col justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColour('red')} style={{backgroundColor: 'red'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Red</button>
          <button onClick={() => setColour('green')} style={{backgroundColor: 'green'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Green</button>
          <button onClick={() => setColour('blue')} style={{backgroundColor: 'blue'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Blue</button>
          <button onClick={() => setColour('orange')} style={{backgroundColor: 'orange'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Orange</button>
          <button onClick={() => setColour('pink')} style={{backgroundColor: 'pink'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Pink</button>
          <button onClick={() => setColour('purple')} style={{backgroundColor: 'purple'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Purple</button>
          <button onClick={() => setColour('violet')} style={{backgroundColor: 'violet'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white'>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
