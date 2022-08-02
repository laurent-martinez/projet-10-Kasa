// import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Error = () => {
   return (
      <div className="container">
         <Header />
         <div className="pageNotFound">
            <h1 className="pageNotFound_title">404</h1>
            <h2 className="pageNotFound_subtitle">
               Oups! La page que vous demandez n'existe pas.
            </h2>
            {/* <Link path="/">Retourner sur la page d'accueil</Link> */}
         </div>
      </div>
   )
}

export default Error
