import { Link } from 'react-router-dom'
import useGetAccomodations from '../../data/UseGetAccomodations'
import './Cards.scss'
// import accomodations from '../../data/accomodations.json'
const Cards = () => {
   const accomodations = useGetAccomodations()
   console.log(accomodations)
   return (
      <div className="accomodations">
         {accomodations &&
            accomodations.map((card) => (
               <Link
                  to={`accomodation/${card.id}`}
                  className="card"
                  key={card.id}
               >
                  <img
                     className="card_picture"
                     src={card.cover}
                     alt="Accomodation"
                  />
                  <h2 className="card_title">{card.title}</h2>
               </Link>
            ))}
      </div>
   )
}

export default Cards
