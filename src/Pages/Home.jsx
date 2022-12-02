import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  })

  return (
    <div className='grid'>
        <h1>HOME</h1>
        {beers.length 
           ? beers.map(beer => (<Card data={beer} />))
           : null
        }
    </div>
  )
}

export default Home