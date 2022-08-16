import { Link } from 'react-router-dom'
import useGetAccomodations from '../../data/UseGetAccomodations'
import './Cards.scss'

const Cards = () => {
   const accomodations = useGetAccomodations()
   return (
      <div className="accomodations">
         {/* verify if the list of accomodations is here & map through to get the cards & link to accomodation page */}
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
