// import { useEffect, useState } from 'react'

// const useFetch = () => {
//    const [accomodations, setAccomodations] = useState(null)
//    const [loading, setLoading] = useState(false)

//    useEffect(() => {
//       setLoading(true)
//       fetch(
//          'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
//       )
//          .then((res) => res.json())
//          .then((data) => setAccomodations(data))
//       setLoading(false)
//    }, [])
//    console.log(accomodations)
//    return { accomodations, loading }
// }

// const useGetAccomodation = (accomodationId) => {
//    const [accomodation, setAccomodation] = useState(null)
//    useEffect(() => {
//       let accomodationFind = accomodations.find(
//          (el) => el.id === accomodationId
//       )
//       setAccomodation(accomodationFind)
//    }, [accomodationId])
//    return { accomodation }
// }

// export { useGetAccomodation, useFetch }
