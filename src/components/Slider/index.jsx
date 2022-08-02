import { useParams } from 'react-router-dom'

const Carrousel = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))

   return (
      <>
         <div className="slider">
            {accomodation.pictures.map((image) => (
               <img
                  src={image}
                  alt="kekchose"
                  key={Math.random().toString(36).substring(2, 15)}
                  className="slider_img"
               ></img>
            ))}
         </div>
         <h1 className="slider-title">{accomodation.title}</h1>
      </>
   )
}

export default Carrousel
