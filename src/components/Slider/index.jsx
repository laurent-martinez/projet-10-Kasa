import { useParams } from 'react-router-dom'
import { useState } from 'react'
// import useGetAccomodations from '../../data/UseGetAccomodations'
import accomodations from '../../data/accomodations.json'
import './Slider.scss'

const Carrousel = () => {
   const { id } = useParams()
   const [currentIndex, setCurrentIndex] = useState(0)
   // const accomodations = useGetAccomodations()

   let accomodation = accomodations.find((el) => el.id === id)
   let images = accomodation.pictures

   const previousPicture = () => {
      const isFirstPicture = currentIndex === 0
      const newIndex = isFirstPicture ? images.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }
   const nextPicture = () => {
      const isLastPicture = currentIndex === images.length - 1
      const newIndex = isLastPicture ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
   }

   return (
      <>
         <div className="slider">
            <div className="leftArrow" onClick={previousPicture}>
               <svg
                  width="48"
                  height="80"
                  viewBox="0 0 48 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                     fill="white"
                  />
               </svg>
            </div>
            <img
               src={images[currentIndex]}
               alt="kekchose"
               className="slider_img"
            />
            <div className="rightArrow" onClick={nextPicture}>
               <svg
                  width="48"
                  height="80"
                  viewBox="0 0 48 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                     fill="white"
                  />
               </svg>
            </div>
            <div className="slider-count">
               {currentIndex + 1}/{images.length}
            </div>
         </div>
      </>
   )
}

export default Carrousel
