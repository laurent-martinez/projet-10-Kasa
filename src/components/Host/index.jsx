import { useParams } from 'react-router-dom'

const Host = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))
   return (
      <div className="host">
         <h3 className="host_name">{accomodation.host.name}</h3>
         <img
            className="host_img"
            src={accomodation.host.picture}
            alt={accomodation.host.name}
         />
      </div>
   )
}

export default Host
