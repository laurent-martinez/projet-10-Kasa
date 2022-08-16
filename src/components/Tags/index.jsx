import { useParams } from 'react-router-dom'
import './Tags.scss'
import accomodations from '../../data/accomodations.json'

const Tags = () => {
   const { id } = useParams()
   let accomodation = accomodations.find((el) => el.id === id)
   return (
      <div className="tags">
         {/* map into tags to create each one & add key from index */}
         {accomodation.tags.map((tag, index) => (
            <p className="tag" key={index}>
               {tag}
            </p>
         ))}
      </div>
   )
}

export default Tags
