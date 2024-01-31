import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    if(number) str += "0123456789"
    if(charAllow) str += "!@#$%^&*_+={}[]~`"

    for(let i = 1; i <= length; i++){
      let char =Math.floor( Math.random()*str.length +1);
      pass += str.charAt(char)
  
    }
    setPassword(pass)
  
  },[length, number,charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select(); 
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,charAllow, passwordGenerator])


 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 my-8 bg-gray-300 mb-4'>
        <h1 className='text-2xl font-bold text-gray-900'>Password Generator</h1>
        <div className='flex'> 

          <input type='text' value={password} placeholder='password' ref={passwordRef} className='outline-none w-full py-1 px-3 rounded-md mb-3' readOnly />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type='range' min={6} max={50} value={length} onChange={(e)=>setLength(e.target.value)} className='cursor-pointer' />
              <label  className='text-gray-900'>Length {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox' defaultChecked={number} id='numberInput'  onChange={()=>setNumber((prev)=>!prev)} className='cursor-pointer' />
              <label  className='text-gray-900'>Numbers </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox' defaultChecked={charAllow} id='charInput'  onChange={()=>setCharAllow((prev)=>!prev)} className='cursor-pointer' />
              <label  className='text-gray-900'>Charcters </label>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default App
