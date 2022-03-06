import React ,{useState  }from 'react'
import Offer from './../homePage/homeFooter/offer';
import './blog.scss'
import { blog } from './blog__examples';
import LearnMore from './learnMore';
import NewBlog from './newBlog';

export default function Blog() {
    const [state , setState] = useState([])
    const [seeMore , setSeeMore] = useState()
    const more = () => {
      setSeeMore(!seeMore)
    }
    
 
    const trueMore = blog
    const falseMore = blog.slice(0,6)

  return (
    <div className='Blog'>
        <NewBlog state={state}/>
        <div className='blog__wrapp'>
            {seeMore ? trueMore.map(items => {
                return <div  className='blog__child' key={items.id} > 
                        <img src={items.img} alt="img" />
                        <h6>{items.title}</h6>
                        <p>{items.text.slice(0,205)}</p>
                        <LearnMore state={state} setState={setState}  items={items}  />
                </div>
            }): falseMore.map(items => {
              return <div  className='blog__child' key={items.id}>
                      <img src={items.img} alt="img" />
                      <h6>{items.title}</h6>
                      <p>{items.text.slice(0,205)}</p>
                        <LearnMore state={state} setState={setState} items={items} />
              </div>})}
        </div>




        
        <div className='seeMore'>
            <button onClick={more} >See More ....</button>
        </div>
        
       
        <Offer/>
    </div>
  )
}
