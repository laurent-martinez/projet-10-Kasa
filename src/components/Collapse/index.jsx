import { useState } from 'react'
import './Collapse.scss'

const Collapse = ({ children, label, size }) => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="details-container">
         {/* add toggle function on click to change the opening state */}
         <button
            className={`details collapse-${size}`}
            onClick={() => {
               setIsOpen(!isOpen)
            }}
         >
            {/* change the arrow position according to the opening state */}
            {label}
            {isOpen ? (
               <svg
                  width="28"
                  height="17"
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
            ) : (
               <svg
                  width="28"
                  height="17"
                  className="arrowDown"
                  viewBox="0 0 25 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M2.6635 0.859488L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859488L12.4605 10.6572L2.6635 0.859488V0.859488Z"
                     fill="white"
                  />
               </svg>
            )}
            {/* add content if the the state is open */}
         </button>
         {isOpen && <div className={`content content-${size}`}>{children}</div>}
      </div>
   )
}

export default Collapse
