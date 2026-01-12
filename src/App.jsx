import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
 
  const [images,setImages] = useState([])
  const [page,setPage] = useState(1)

  const fetchData = async ()=>{
 const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)

   setImages(res.data)

  }

  useEffect(()=>{
   fetchData()
  },[])

  useEffect(()=>{

    const windowHeight = window.innerHeight;
    const scrollYHeight = window.scrollY;
   console.log(windowHeight)
   console.log(scrollYHeight)
  })


  return (
    <div className='p-8'>
      <h1 className='text-center font-bold text-4xl'>Lazy Loading & Skeleton Loading</h1>
      <div className='grid grid-cols-3 space-x-2 space-y-2 mt-5'>
        {
        images.map((item,index)=>(
        <div key={index} className='bg-gray-200 rounded'>
          <img src={item.download_url} alt=""/>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default App
