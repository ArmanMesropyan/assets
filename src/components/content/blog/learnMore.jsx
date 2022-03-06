import React from 'react'


export default function LearnMore({items , setState , state }){
  const showMore = () =>{
    const newState = {
      id:items.id,
      img:items.img,
      title:items.title,
      text:items.text,
    }
    setState([state , newState])
    
   
  }
  

  return (
    <div>
        <button onClick={showMore} >Learn More</button>
    </div>
  )
}
