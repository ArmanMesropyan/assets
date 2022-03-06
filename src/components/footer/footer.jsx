/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useLocation } from 'react-router-dom'

//===============================================
import './footer.scss'

const Footer = () => {
    let location = useLocation()
    let about =  '/about'
    let home = '/' 
    let services = '/services' 
    let footer  = 'footer'
    let blackFooter = 'black'
   
    
  return (
    <footer className={ location.pathname !== home && about && services ? blackFooter : footer  }>
            <div className='footer__child'>
                <ul className='footer__list'>
                    <h6>Services</h6>
                        <li><a href="#">Accounting</a></li>
                        <li><a href="#">Tax advice</a></li>
                        <li><a href="#">systems construction</a></li>
                        <li><a href="#">Internal accounting review</a></li>
                        <li><a href="#">financial advice</a></li>
                </ul>
            </div>
            <div className='footer__child'>
                <ul className='footer__list'>
                    <h6>Calculator</h6>
                        <li><a href="#">Salary </a></li>
                        <li><a href="#">loan </a></li>
                        <li><a href="#">Annuity</a></li>
                        <li><a href="#">Property tax</a></li>
                </ul>
            </div>
            <div className='footer__child'>
                <ul className='footer__list'>
                    <h6>OUR COMPANY</h6>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className='footer__child'>
                <ul className='footer__list'>
                    <h6>LIBRARY</h6>
                        <li><a href="#">IFRS</a></li>
                        <li><a href="#">ISA</a></li>
                        <li><a href="#">Public sector standards</a></li>
                        <li><a href="#">Chart of Accounts:</a></li>
                        <li><a href="#">Typical papers</a></li>
                </ul>
            </div>
            <div className='footer__child'>
                <ul className='footer__list'>
                    <h6>FOLLOW US</h6>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">linkedin</a></li>
                </ul>
            </div>
    </footer>
  )
}
export default Footer