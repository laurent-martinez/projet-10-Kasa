import { useParams } from 'react-router-dom'
import accomodations from '../../data/accomodations.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import Stars from '../../components/Stars'
import Host from '../../components/Host'
import TitleNlocation from '../../components/TitleNlocation'
import './Accomodation.scss'

const AccomodationPage = () => {
   // get the url specific id with useParams hook
   const { id } = useParams()
   // get the specific accomodation relate to the id
   const accomodation = accomodations.find((el) => el.id === id)

   return (
      <>
         <div className="container accomodation">
            <Header />
            <div className="slider-container">
               <Slider />
            </div>
            <div className="accomodation_info">
               <div className="titlesNhost">
                  <TitleNlocation />
                  <Tags />
               </div>
               <div className="tagsNrate">
                  <Host />
                  <Stars accomodation={accomodation} />
               </div>
            </div>
            <div className="details_container">
               <Collapse size="small" label="description">
                  <p className="collapse-content">{accomodation.description}</p>
               </Collapse>
               {/* from the specific accomodation loop with a map to get all the quipments & add a key */}
               <Collapse size="small" label="equipments">
                  {accomodation.equipments.map((equipment, index) => (
                     <p className="collapse-content" key={index}>
                        {equipment}
                     </p>
                  ))}
               </Collapse>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default AccomodationPage
