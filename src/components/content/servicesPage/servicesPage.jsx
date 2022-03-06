import React from 'react'

// my imports =============
import './servicePage.scss'
import servicess from './#servicesPage__img/services.jpg'
import OurServices from './../homePage/homeContent/our_services';
import Offer from './../homePage/homeFooter/offer';
import vector1 from './#servicesPage__img/Vector.png'
import vector2 from './#servicesPage__img/Vector-1.png'
import vector3 from './#servicesPage__img/Vector-2.png'





export default function ServicesPage() {
  return (
    <div className='ServicesPage'>
        <div className='sp__title'>
            <h6>About Assets <br /> Services</h6>
        </div>
        <div className="sp__background">
            <img src={servicess} alt="servicess__img" />
        </div>
          <div><OurServices/></div>
          <Offer/> 

          <div className='services__info'>
              <div className='services__info__item'>
                <span> <img src={vector1} alt="services__icon" /> Libary</span>
                <p>
                    The Accounting Library is dedicated to serving
                    the educational and research needs of the students 
                    and faculty of the Leventhal School of Accounting by
                    providing access to quality accounting and taxation
                    resources, reference and research services, and
                    classroom instruction.
                </p>
              </div>
              <div className='services__info__item'>
                <span> <img src={vector2} alt="services__icon" /> Calculator</span>
                <p>
                    On this page you will find an introduction to accounting
                    with supporting accounting calculators provided at appropriate
                    discussion points in the introductory article. These Accounting
                    Calculators are part of the suite of free online finance
                    calculators designed and maintained by Assets.
                </p>
              </div>
              <div className='services__info__item'>
                <span> <img src={vector3} alt="services__icon" /> Blog</span>
                <p>
                    Assets blog is one of the most famous accounting news, 
                    trade magazine, and informative blog on the Internet.
                    It is one of the best resources for public accountants
                    and professionals who offer tax preparation, bookkeeping,
                    and financial services to individuals, small businesses,
                    and SMBs.
                </p>
              </div>
          </div>

            

        
    </div>
  )
}
