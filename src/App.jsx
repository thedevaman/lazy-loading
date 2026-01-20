import { Skeleton } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
 
  const [images,setImages] = useState([])
  const [page,setPage] = useState(1)
  const [load,setLoad] = useState(false)

  const fetchData = async ()=>{
 const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)

   setImages(prevImages =>[...prevImages,...res.data]);
   setLoad(true)
  }

  useEffect(()=>{
   fetchData()
  },[page])

  useEffect(()=>{
    const handleScroll = () =>{
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const ScrollableHeight = document.documentElement.scrollHeight

    if(ScrollableHeight <= windowHeight+scrollY)
    {
      setPage(page+1)
    }


  
    }

   
    window.addEventListener('scroll',handleScroll)

    return () => window.addEventListener('scroll',handleScroll)
  })

  

  
   


  return (
    <div className='p-8'>
      <h1 className='text-center font-bold text-4xl'>Lazy Loading & Skeleton Loading</h1>
      <div className='grid grid-cols-3 space-x-2 space-y-2 mt-5'>
       {
        !load && 
        Array.from({length:6}).map((_,i) => (
      <Skeleton.Image active 
      style={{ width: '100%', height: '400px' }}  />
       ))
}

        {
        images.map((item,index)=>(
        <div key={index} className='bg-gray-200 rounded'>
          <img src={item.download_url} alt="" loading="lazy"/>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default App
