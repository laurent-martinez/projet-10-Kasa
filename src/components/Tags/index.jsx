import { useParams } from 'react-router-dom'
import './Tags.scss'
import accomodations from '../../data/accomodations.json'

const Tags = () => {
   const idAcc = useParams()
   let accomodation = accomodations.find((el) => el.id === idAcc.id)
   return (
      <div className="tags">
         {accomodation.tags.map((tag, index) => (
            <p className="tag" key={index}>
               {tag}
            </p>
         ))}
      </div>
   )
}

export default Tags
