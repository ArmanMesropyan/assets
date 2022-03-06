import React from 'react'
import { contentHome } from './simpleHomeContent';


// my imports =======================
import './homePageContent.scss'
import baackground1 from './#homeContent__img/background1.png'
import baackground2 from './#homeContent__img/background2.png'
import OurServices from './our_services';

export default function HomePageContent() {
  return (
    <div className='homePageContent'>
        <div className='hpc'>
        <h6 className='hpc__title'>How do we help ?</h6>
        <div className='hpc__items'>
            {contentHome.map(item => {
                return <div className='item__cont' key={item.id}>
                         <div className='item__child'>
                            <img src={item.image} alt="icon" />
                            <b>{item.title}</b>    
                         </div>   
                         <div className='item__child'>
                             <p>{item.text}</p>
                         </div> 
                       </div>
            })}
        </div>
        </div>
        <div className="hpc__background">
            <img src={baackground1} alt="background" />
        </div>
        
        <div>
            <OurServices/>
        </div>



        <div className="hpc__background">
            <img src={baackground2} alt="background" />
        </div>
    </div>
  )
}
