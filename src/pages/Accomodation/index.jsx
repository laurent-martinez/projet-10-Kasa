import { useParams } from 'react-router-dom'
import data from '../../data/accomodations.json'
import './Accomodation.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import Stars from '../../components/Stars'
import Host from '../../components/Host'
import TitleNlocation from '../../components/TitleNlocation'

const Accomodation = () => {
   const idAcc = useParams()
   // let accomodation = {}
   // data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))
   let accomodation = data.find((el) => el.id === idAcc.id)
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
               <Collapse label="description">
                  <p className="collapse-content">{accomodation.description}</p>
               </Collapse>
               <Collapse label="equipments">
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

export default Accomodation
