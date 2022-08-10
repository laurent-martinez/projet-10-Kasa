// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error'

const App = () => {
   // const [data, setData] = useState([])

   // useEffect(() => {
   //    getData()
   // }, [])

   // const getData = async () => {
   //    //   const url = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
   //    const result = await fetch('/data/accomodations.json')
   //    const getResult = await result.json()
   //    setData(getResult)
   // }
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="accomodation">
               <Route path=":id" element={<Accomodation />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
