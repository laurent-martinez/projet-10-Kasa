import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrousel from '../../components/Carrousel'
import Details from '../../components/Details'

const Accomodation = ({ data }) => {
   return (
      <>
         <div className="container accomodation">
            <Header />
            <Carrousel data={data} />
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
