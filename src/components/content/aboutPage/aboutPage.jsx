import React from 'react'
import aboutImg from './#about_page__img/about.jpg'
import of1 from './#about_page__img/office__1.jpg'
import of2 from './#about_page__img/office__2.jpg'
import './aboutPage.scss'

export default function AboutPage() {
  return (
    <div className='aboutPage'>
        <div className='about__news'>
            <h6>About Assets <br /> Consulting Center</h6>
            <img src={aboutImg} alt="background" />
        </div>
        <div className="partner">
            <h6>About becoming a partner. </h6>
            <div className='partner__item'>
            <div className='child__partner'>
                <div className='img__child__partner'>
                    <img src={of1} alt="img" />
                </div>
                <div className='info__child__partner'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas lectus vel, ornare convallis proin porta tortor turpis.
                        Curabitur eros, elementum, accumsan dui. Accumsan sed sodales scelerisque a.
                        At in integer non ultrices vulputate. Senectus sagittis ornare ut eget. 
                        Cum cras mauris etiam pharetra. Morbi ante purus odio tellus neque id 
                        nam scelerisque fermentum. Sed justo, quisque malesuada dignissim urna eget 
                        aliquam eu. Tincidunt non orci accumsan eleifend augue mattis enim, non nisi. 
                        Sodales justo euismod dolor nibh amet quis ac, eget consectetur.
                        Neque turpis nisi risus felis gravida
                    </p>
                    <button>Become a partner</button>
                </div>
            </div>
            <div className='child__partner'>
                <div className='info__child__partner'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas lectus vel, ornare convallis proin porta tortor turpis.
                        Curabitur eros, elementum, accumsan dui. Accumsan sed sodales scelerisque a.
                        At in integer non ultrices vulputate. Senectus sagittis ornare ut eget. 
                        Cum cras mauris etiam pharetra. Morbi ante purus odio tellus neque id nam scelerisque fermentum. 
                        Sed justo, quisque malesuada dignissim urna eget aliquam eu. Tincidunt non orci accumsan eleifend 
                        augue mattis enim, non nisi. Sodales justo euismod dolor nibh amet quis ac, eget consectetur.
                        Neque turpis nisi risus felis gravida
                    </p>
                    <button>Feedback</button>
                </div>
                <div className='img__child__partner'>
                    <img src={of2} alt="img" />
                </div>
                
            </div>

            </div>
            
        </div>
    </div>
  )
}
