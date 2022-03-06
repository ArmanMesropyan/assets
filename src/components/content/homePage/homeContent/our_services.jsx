import React from 'react'
import './our_services.scss'
import { homeServies } from './simpleHomeContent';
export default function OurServices() {
  return (
    <div>
    <div className="hpc">   
    <h6 className='hpc__title'>Our services</h6>
    <div className="hpc__services">
        {homeServies.map(services => {
            return <div className='services__cont' key={services.id}>
                <img src={services.img} alt="img" />
                <p className='hpc__servises__title'>{services.title}</p>
                <p>{services.text}</p>
            </div>
        })}
    </div>
    </div></div>
  )
}
