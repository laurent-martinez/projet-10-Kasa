import { useParams } from 'react-router-dom'
import './TitleNlocation.scss'
import accomodations from '../../data/accomodations.json'
const TitleNlocation = () => {
   const { id } = useParams()
   let accomodation = accomodations.find((el) => el.id === id)

   return (
      <div>
         <h1 className="slider_title">{accomodation.title}</h1>
         <h2 className="slider_location">{accomodation.location}</h2>
      </div>
   )
}

export default TitleNlocation
