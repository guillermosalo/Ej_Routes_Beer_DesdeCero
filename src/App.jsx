import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import Beer from './Pages/Beer'
import NotFound from './Pages/NotFound'
import {routes} from './routes'
import Card from './Components/Card'
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {

  const [data, setData] = useState([])
  const url = 'https://api.punkapi.com/v2/beers/${}'
  useEffect(() =>{
    axios(url)
    .then(res => setData(res.data.result))
  },[])

  return (
  <Routes>
    <Route path= {routes.home} element={<Home/>}>
      <Route path= {routes.beer} element= {<Beer data= {data}/>}>
        <Route path= '/beer/:id' element= {<Card data= {data}/>}/>
      </Route>
      <Route path= {routes.contacto} element={<Contacto/>}/>
    </Route>
    <Route path= {routes.notfound} element={<NotFound/>}/>
  </Routes>
  )
}

export default App
