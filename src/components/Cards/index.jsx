import { useState, useEffect } from 'react'

const Cards = () => {
   // data state // storage
   const [data, setData] = useState([])

   useEffect(() => {
      getData()
   }, [])

   const getData = async () => {
      //   const url = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
      const result = await fetch('/data/accomodations.json')
      const getResult = await result.json()
      setData(getResult)
   }
   console.log(data)
   return (
      <div className="accomodations">
         {data.map((card) => (
            <div className="card" key={card.id}>
               <h2 className="card_title">{card.title}</h2>
            </div>
         ))}
      </div>
   )
}

export default Cards
