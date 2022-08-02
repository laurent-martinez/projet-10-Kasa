import { Link } from 'react-router-dom'

const Cards = ({ data }) => {
   // data state // storage
   console.log(data)
   return (
      <div className="accomodations">
         {data.map((card) => (
            <Link to={`accomodation/${card.id}`} className="card" key={card.id}>
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
