import React from 'react'

function App() {
  return (
    <div className='p-8'>
      <h1 className='text-center font-bold text-4xl'>Lazy Loading & Skeleton Loading</h1>
      <div className='grid grid-cols-3 space-x-2 space-y-2 mt-5'>
        {
        Array(20).fill("cghgh").map((item,index)=>(
        <div key={index} className='bg-gray-200 rounded'>{item}</div>
        ))
        }
      </div>
    </div>
  )
}

export default App
