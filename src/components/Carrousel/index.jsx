import { useParams } from 'react-router-dom'

const Carrousel = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))

   return (
      <div className="carrousel">
         {/* {accomodation.pictures.map((image) => (
            <img src={image} alt="kekchose" className="carrousel_img"></img>
         ))} */}
         <h1>{accomodation.title}</h1>
      </div>
   )
}

export default Carrousel
