import React from 'react'
import cover from './#homePageHeader__Img/hph__cover__photo.png'
import image from './#homePageHeader__Img/office.png'
import './homePageHeader.scss'
const  HomePageHeader = () => {
  return (
    <div className='homePage__header__wrapper'>
        <div className='hph__title'>
            <div className='hph__title__child'>
                <h2 >Your trusted partner <br />
                     business consultant.</h2>
            </div>
            <div className='hph__title__child'>
                <button>Ask a question</button>
                <button>Our proposal</button>
            </div>
        </div>
        <div className="hph__paragrap">
            <p>In the field of tax finance </p>
        </div>
        <div className="hph__cover__img">
            <img src={cover} alt="cover__img" />
        </div>
        <div className="hph__paragrap">
            <h5>What can I do for you <br />
                 and your company?</h5>
        </div>
        <div className="hph__about">
            <div className="hph__about__child">
                <img src={image} alt="office" />
            </div>
            <div className="hph__about__child">
                <div> 
                    <span>01</span>
                     We provide a full spectrum of traditional tax,
                     accounting, and assurance services.
                </div>

                <div> 
                    <span>02</span>
                     We provide a full spectrum of traditional tax,
                     accounting, and assurance services.
                </div>

                <div> 
                    <span>03</span> 
                    We provide a full spectrum of traditional tax,
                    accounting, and assurance services.
                </div>

                <div> 
                    <span>04</span>
                     We provide a full spectrum of traditional tax, 
                     accounting, and assurance services.
                </div>
            </div>
        </div>
    </div>
  )
}
export default  HomePageHeader