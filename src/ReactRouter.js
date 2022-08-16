import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AccomodationPage from './pages/Accomodation'
import Error from './pages/Error'

// all the routes for the app using react-router v6

const ReactRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="accomodation">
               <Route path=":id" element={<AccomodationPage />} />
            </Route>
            <Route path="/error" element={<Error />} />
            {/* send to error page if url doesn't match any url pages  */}
            <Route path="*" element={<Navigate to="/error" replace />} />
         </Routes>
      </BrowserRouter>
   )
}

export default ReactRouter
