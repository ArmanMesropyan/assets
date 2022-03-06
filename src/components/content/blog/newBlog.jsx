import React from 'react'
import './newBlog.scss'
import { v4 as uuidv4 } from 'uuid';
export default function NewBlog({state}) {
   
    const newState = state.map(item=>{
        
        return <div key={uuidv4()} className='newBlog__wrapper'>
                     <h6>{item.title}</h6>
                     <div className='newBlog__parent'>
                            <div className='newBlog__child'>
                                 <img src={item.img} alt='' />
                            </div>
                            <div className='newBlog__child'> 
                             <p>{item.text}</p>
                            </div>
                     </div>
                    
                   
                 
                    
            </div>
    })
  return (
    <div>
       {newState}
    </div>
  )
}
