import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Body = ({ darkMode }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpper = () => {
    const newInput = input.toUpperCase();
    setInput(newInput);
  };

  const handleLower = () => {
    const newInput = input.toLowerCase();
    setInput(newInput);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    toast.success("Copied to clipboard!",{
      position: "top-center",
      autoClose: 5000,
     

    })
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSpaces = () => {
    setInput(input.trim().replace(/\s+/g, ' '));
  };

  return (
    <>
      <div>
        <div className={`h-[600px] lg:h-[500px] w-[400px] lg:w-[600px] mx-2 sm:mx-72 my-5 ${darkMode ? 'bg-purple-400' : 'bg-purple-300'}`}>
          <h1 className='text-3xl font-bold mx-3 my-1'>Enter Text To Analyze</h1>

          <div>
            <textarea 
              placeholder='Enter text'
              className='w-[300px] lg:w-[500px] h-[200px] mx-7 my-3 outline-none p-2' 
              onChange={handleChange} 
              value={input}
            />
          </div>

          <div className='flex flex-wrap gap-2 mx-7'>
            <button onClick={handleUpper} className='py-2 px-3 rounded-full text-white bg-purple-500 hover:bg-purple-600'>UpperCase</button>
            <button onClick={handleLower} className='px-3 py-2 rounded-full text-white bg-purple-500 hover:bg-purple-600'>LowerCase</button>
            <button onClick={handleCopy} className='py-2 px-7 rounded-full text-white bg-purple-500 hover:bg-purple-600'>Copy</button>
            <button onClick={handleClear} className='py-2 px-7 rounded-full text-white bg-purple-500 hover:bg-purple-600'>Clear</button>
            <button onClick={handleSpaces} className='py-2 px-2 rounded-full text-white bg-purple-500 hover:bg-purple-600'>Clear Spaces</button>
          </div>

          <h1 className='text-3xl font-bold mx-3 my-3'>Summary</h1>
          <div>
            <p className='mx-5 text-1xl font-semibold'>{input.trim().split(/\s+/).filter(word => word.length > 0).length} words and {input.length} characters</p>
            <p className='mx-10 text-1xl font-semibold'>{0.008 * input.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;






