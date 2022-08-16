import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import './Home.scss'

const Home = () => {
   return (
      <>
         <div className="container home">
            <Header />
            <Banner src="/img/Banner1.png">
               <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
            </Banner>
            <Cards />
         </div>
         <Footer />
      </>
   )
}

export default Home
