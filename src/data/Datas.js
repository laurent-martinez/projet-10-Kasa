// import { useEffect, useState } from 'react'
import ArrayOfAccomodation from '../../data/accomodations.json'
import { useParams } from 'react-router-dom'

// const useFetch = (data) => {
//    const [data, setData] = useState(null)
//    const [loading, setLoading] = useState(false)
//    const [error, setError] = useState(null)

//    useEffect(() => {
//       setLoading(true)
//       fetch('/src/data/accomodations.json')
//          .then((response) => response.json())
//          .then((data) => setData(data))
//          .catch((err) => setError(err))
//          .finally(() => setLoading(false))
//    }, [])

//    return { data, error, loading }
// }
// // const getAccomodation = ()=> {
// //     data.
// // }

// export default useFetch
const useGetAccomodation = () => {
   const idAcc = useParams()
   let accomodation = ArrayOfAccomodation.find((el) => el.id === idAcc.id)
   return accomodation
}
export default useGetAccomodation
