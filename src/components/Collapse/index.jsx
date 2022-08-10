import { useState } from 'react'
import './Collapse.scss'

const Collapse = ({ children, label }) => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="details-container">
         <button className="details">
            {label}
            <svg
               width="28"
               height="17"
               onClick={(e) => {
                  setIsOpen(!isOpen)
                  e.target.classList.toggle('rotate')
               }}
               className="arrowUp"
               viewBox="0 0 28 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
                  fill="white"
               />
            </svg>
         </button>
         {isOpen && <div className="content">{children}</div>}
      </div>
   )
}

export default Collapse
