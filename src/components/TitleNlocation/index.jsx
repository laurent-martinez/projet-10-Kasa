import { useParams } from 'react-router-dom'

const TitleNlocation = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))

   return (
      <div>
         <h1 className="slider_title">{accomodation.title}</h1>
         <h2 className="slider_location">{accomodation.location}</h2>
      </div>
   )
}

export default TitleNlocation
