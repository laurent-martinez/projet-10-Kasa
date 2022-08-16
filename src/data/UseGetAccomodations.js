import { useState, useEffect } from 'react'
import datas from './accomodations.json'

const useGetAccomodations = () => {
   const [accomodations, setAccomodations] = useState(null)

   useEffect(() => {
      setAccomodations(datas)
   }, [])
   return accomodations
}
export default useGetAccomodations
