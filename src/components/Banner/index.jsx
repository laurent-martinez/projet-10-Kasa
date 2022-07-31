const Banner = ({ src }) => {
   return (
      <div className="banner">
         <img
            src={src}
            alt="Banner landscape of cliff by the sea"
            className="banner_img"
         />
         <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
      </div>
   )
}

export default Banner
