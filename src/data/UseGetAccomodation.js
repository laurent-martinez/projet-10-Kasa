import { useState, useEffect } from 'react'
import datas from './accomodations.json'

const useGetAccomodation = (id) => {
   const [accomodation, setAccomodation] = useState(null)
   useEffect(() => {
      const data = datas.find((el) => el.id === id)
      setAccomodation(data)
   }, [id])
   return accomodation
}

export default useGetAccomodation
