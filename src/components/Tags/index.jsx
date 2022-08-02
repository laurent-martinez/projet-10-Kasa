import { useParams } from 'react-router-dom'

const Tags = ({ data }) => {
   const idAcc = useParams()

   let accomodation = {}
   data.map((dt) => (dt.id === idAcc.id ? (accomodation = dt) : undefined))
   console.log(data)
   return (
      <div className="tags">
         {accomodation.tags.map((tag) => (
            <p
               className="tag"
               key={Math.random().toString(36).substring(2, 15)}
            >
               {tag}
            </p>
         ))}
      </div>
   )
}

export default Tags
