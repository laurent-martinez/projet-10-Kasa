import './Banner.scss'
const Banner = ({ src, children }) => {
   return (
      <div className="banner">
         <img
            src={src}
            alt="Banner landscape of cliff by the sea"
            className="banner_img"
         />
         {children}
      </div>
   )
}

export default Banner
