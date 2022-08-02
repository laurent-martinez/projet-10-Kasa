import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import Details from '../../components/Details'
import Tags from '../../components/Tags'
import Stars from '../../components/Stars'
import Host from '../../components/Host'
import TitleNlocation from '../../components/TitleNlocation'

const Accomodation = ({ data }) => {
   return (
      <>
         <div className="container accomodation">
            <Header />
            <div className="slider-container">
               <Slider data={data} />
            </div>
            <div className="titlesNhost">
               <TitleNlocation data={data} />
               <Host data={data} />
            </div>
            <div className="tagsNrate">
               <Tags data={data} />
               <Stars data={data} />
            </div>
            <div className="details_container">
               <Details title="description" data={data} />
               <Details title="equipment" data={data} />
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Accomodation
