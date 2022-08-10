import Logo from '../Logo'
import Navigation from '../Navigation'
import './Header.scss'

const Header = () => {
   return (
      <div className="header">
         <Logo />
         <Navigation />
      </div>
   )
}

export default Header
