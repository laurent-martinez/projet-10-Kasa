import { useParams } from 'react-router-dom'
import './Tags.scss'
import accomodations from '../../data/accomodations.json'
// import useGetAccomodations from '../../data/UseGetAccomodations'

const Tags = () => {
   const { id } = useParams()
   // const accomodations = useGetAccomodations()
   let accomodation = accomodations.find((el) => el.id === id)
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
