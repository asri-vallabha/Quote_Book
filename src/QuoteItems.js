import React from 'react'
import EditQuote from './EditQuote'
const QuoteItems = (props) => {
    const {id,name,body,removeItem,editItem}=props
    const[toggle,setToggle]=React.useState(false)

    const handleToggle=()=>{
      setToggle(!toggle)
    }

    const handleRemove=()=>{
        const confirmRemove=(window.confirm("Are You Sure ?"))
        if(confirmRemove){
            removeItem(id)
        }
    }
  return (
    <div>
      {
        toggle ? (
          <div className='EditQuote'>
            <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle}/>
              <button onClick={handleToggle}>Cancel</button>
          </div>
        ):(
          <div className='QuoteItems'>
            <div className="quoteItems">
            <blockquote>“{body}” </blockquote>
            <p>-{name}</p>
            <div className="butt">
            <button  onClick={handleToggle}>Edit</button>
            <button   onClick={handleRemove}>Remove</button>
            </div>
          
            </div>
          </div>
          
        )
      }
       
    </div>
  )
}
export default QuoteItems


// {/* <div class="modal" tabindex="-1">
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title">{body}</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
//                 <p>{name}</p>
//               </div>
//               <div class="modal-footer">
//                 <button type="button" data-bs-dismiss="modal" onClick={handleToggle}>Edit</button>
//                 <button type="button" onClick={handleRemove}>Remove</button>
//               </div>
//             </div>
//           </div>
//         </div> */}