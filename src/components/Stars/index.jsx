import { useParams } from 'react-router-dom'

const getStar = (value) => {
   switch (value) {
      case 0:
         return '/img/emptyHeart.png'
      case 1:
         return '/img/fullHeart.png'
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
const Stars = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))
   console.log(typeof parseInt(accomodation.rating))
   let value = parseInt(accomodation.rating)

   return (
      <div className="Stars">
         {getStars(value).map((value) => (
            <img src={getStar(value)} alt="full heart" />
         ))}
      </div>
   )
}

export default Stars
