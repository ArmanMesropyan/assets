import React from 'react'


import './homeContentFooter.scss'
// my-imports =======================
import logo_1 from './#homeContentFooter__img/logo0.png'
import logo_2 from './#homeContentFooter__img/logo.png'
import logo_3 from './#homeContentFooter__img/logo-1.png'
import logo_4 from './#homeContentFooter__img/logo-2.png'
import logo_5 from './#homeContentFooter__img/logo-3.png'
import logo_6 from './#homeContentFooter__img/logo-4.png'
import left from './#homeContentFooter__img/Line 13.png'
import right from './#homeContentFooter__img/Line 14.png'
import Offer from './offer'

export default function HomeContentFooter() {
  return (
    <div className='homeContentFooter'>
        <Offer/>
        <div className="hcf__clients">
            <div><img src={logo_1} alt="logo" /></div>
            <div><img src={logo_2} alt="logo" /></div>
            <div><img src={logo_3} alt="logo" /></div>
            <div><img src={logo_4} alt="logo" /></div>
            <div><img src={logo_5} alt="logo" /></div>
            <div><img src={logo_6} alt="logo" /></div>
        </div>
        <div className="hcf__commits">
            <p className='commit__text'>“  Work with Assets was fully online which helped to save time.
                  I'm really greatfull that we are working together now . ”
            </p>
            <p className='hcf__comit__name'>Patrick Glenn</p>
            <p className='hcf__commit__dev'>CEO Line agency</p>
            <div className="arrows">
                <img src={left} alt="arrows" />
                <p>01 / 07</p>
                <img src={right} alt="arrows" />
            </div>
        </div>
    </div>
  )
}
