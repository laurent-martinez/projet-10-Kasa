import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

const Home = ({ data }) => {
   // const [data, setData] = useState([])

   // useEffect(() => {
   //    getData()
   // }, [])

   // const getData = async () => {
   //    //   const url = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
   //    const result = await fetch('/data/accomodations.json')
   //    const getResult = await result.json()
   //    setData(getResult)
   // }
   return (
      <>
         <div className="container home">
            <Header />
            <Banner src="/img/banner1.png" />
            <Cards data={data} />
         </div>
         <Footer />
      </>
   )
}

export default Home
