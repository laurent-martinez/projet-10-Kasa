import { Link } from 'react-router-dom'

const Error = () => {
   return (
      <div>
         <h1>404</h1>
         <h2>Oups! La page que vous demandez n'existe pas.</h2>
         <Link path="/">Retourner sur la page d'accueil</Link>
      </div>
   )
}

export default Error
