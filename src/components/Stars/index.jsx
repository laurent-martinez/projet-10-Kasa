import './Stars.scss'

const getStar = (value) => {
   switch (value) {
      case 0:
         return '/img/emptyheart.svg'
      case 1:
         return '/img/fullheart.svg'
      default:
         return console.log('error no rates')
   }
}
const getStars = (value) => {
   switch (value) {
      case 0:
         return [0, 0, 0, 0, 0]
      case 1:
         return [1, 0, 0, 0, 0]
      case 2:
         return [1, 1, 0, 0, 0]
      case 3:
         return [1, 1, 1, 0, 0]
      case 4:
         return [1, 1, 1, 1, 0]
      case 5:
         return [1, 1, 1, 1, 1]
      default:
         return console.log('error no rates')
   }
}
const Stars = ({ accomodation }) => {
   let value = parseInt(accomodation.rating)

   return (
      <div className="Stars">
         {getStars(value).map((value, index) => (
            <img
               className="stars_star"
               src={getStar(value)}
               alt="full heart"
               key={index}
            />
         ))}
      </div>
   )
}

export default Stars
