import { useParams } from 'react-router-dom'
import accomodations from '../../data/accomodations.json'
import './Host.scss'

const Host = () => {
   const idAcc = useParams()
   let accomodation = accomodations?.find((el) => el.id === idAcc.id)
   let name = accomodation.host.name.split(' ')
   let firstName = name[0]
   let familyname = name[1]
   return (
      <div className="host">
         <div className="host_name">
            <h3 className="host_name_firstName">{firstName}</h3>
            <h4 className="host_name_familyName">{familyname}</h4>
         </div>
         <img
            className="host_img"
            src={accomodation.host.picture}
            alt={accomodation.host.name}
         />
      </div>
   )
}

export default Host
