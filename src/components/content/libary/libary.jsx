import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownShortWide} from '@fortawesome/free-solid-svg-icons'
import './libary.scss'
import Offer from './../homePage/homeFooter/offer';
import { localState } from './../../../localStore/localStore';
import { v4 as uuidv4 } from 'uuid';
import vector1 from './#libary__img/Vector.png'
import vector2 from './#libary__img/Vector-1.png'
import download from './#libary__img/download.png'
import icon1 from './#libary__img/icon_1.png'
import icon2 from './#libary__img/icon_2.png'
import icon3 from './#libary__img/icon__3.png'

export default function Libary() {

    const [view , setView] = useState(false)
    const [sort  , setSort] = useState(false)
    
  
    const vertical = localState.map(items => {
        return <div className='libary__content__vertical' key={uuidv4()}>
                  <img src={items.img} alt="img" />
                  <p>{items.titile}</p>  
                  <div className='download__lib'>
                    <img src={vector1} alt="1" /> 
                    <b>{items.download}</b> 
                    <img src={vector2} alt="2" />
                  </div>
        </div>
    })
     const horizontal = localState.map(items => {
        return <div className='libary__content__horizontal' key={uuidv4()}>
                    <div className='horiz__child'>
                      <img src={items.img} alt="img" />
                    </div>
                    <div className='horiz__child'>
                        <div className="title__horiz"><p>{items.titile}</p></div> 
                      <div className='download__lib__horiz'>
                        <button><img src={download} alt="1"  className='download_ic'/>  Download</button> 
                        <b>{items.download}</b> 
                        <img src={vector2} alt="2" className='downloads_icon' />
                        </div>
                    </div>
             </div>
        
    })
    
    const changeHV = () =>{
        setView(!view)
    }
    const sortBy = () =>{
       setSort(!sort)
      
    }
  return (
    <div className='libary'>
     

        <div className="libary__link">
            <ul className="libary__links">
                <li className="libary__items">International Financial Reporting Standards</li>
                <li className="libary__items">International auditing standards</li>
                <li className="libary__items">Public sectostandards</li>
                <li className="libary__items">Chart of Accounts:</li>
                <li className="libary__items">Typical papers</li>    
                <li className="libary__items">Blog</li>    
            </ul>    
        </div>
        <div className='libar__btn'>
            <div className='short'>
                <button onClick={changeHV}>{view ?  <img src={icon2} alt=""  /> :
                                                    <img src={icon1} alt=""  />}
                </button>
            </div>
            <div className='filtr'>
                <button onClick={sortBy}>{sort ?
                 <div className='short__false'><FontAwesomeIcon icon={faArrowDownShortWide}/></div> 
                 :<img src={icon3} alt="" />
                  } </button>
            </div>
        </div>
       
            
            <div className={view ? 'libary__content__wrapper__vertical' : 'libary__content__wrapper__horizontal'}>
                 { view ? vertical : horizontal  } 
          
                 {sort && !view ?  horizontal.sort((a, b) => a.titile > b.titile ? 1 : -1) : null}
                 {sort && view ? vertical.sort((a, b) => a.titile > b.titile ? 1 : -1) : null}
                
            </div>
        
        
    <Offer/>    
    </div>
  )
}
