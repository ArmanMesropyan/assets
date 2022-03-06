/* eslint-disable jsx-a11y/anchor-is-valid */

import React , {useState} from 'react'

// ==========================================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch , faPhone , faBars} from '@fortawesome/free-solid-svg-icons'
import './header.scss'
import Logo from '../../image/PNG 1.png'
import { Link } from 'react-router-dom';

const  Header = () => {

    const [bar , setBar] = useState(false)
    const barStart = () =>{
        setBar(!bar)
        
    }
    const closeBarX = () =>{
        setBar(!bar)
        
    }



  return (

        <header className='header'>
            <div className='header__child'>
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
                
            </div>
            <div className='header__child'>
                {bar ? 
                <div className='header__lists__bar'>   
                    <ul>
                    <button onClick={closeBarX}>X</button> 
                        <li className='header__list__item' onClick={closeBarX}> <Link   to="/about">About Us</Link> </li>
                        <li className='header__list__item' onClick={closeBarX}> <Link to="/services">Services</Link> </li>
                        <li className='header__list__item' onClick={closeBarX}> <Link to="/calculator/*">Calculator</Link> </li>
                        <li className='header__list__item' onClick={closeBarX}> <Link to="/libary">Libary</Link> </li>
                        <li className='header__list__item' onClick={closeBarX}> <Link to="/team">Team</Link> </li>
                        <li className='header__list__item' onClick={closeBarX}> <Link to="/contactUs">Contact As</Link> </li>
                      </ul> 
                </div>
               : 
                 <ul className='header__lists'>
                    <li className='header__list__item'> <Link   to="/about">About Us</Link> </li>
                    <li className='header__list__item'> <Link to="/services">Services</Link> </li>
                    <li className='header__list__item'> <Link to="/calculator">Calculator</Link> </li>
                    <li className='header__list__item'> <Link to="/libary">Libary</Link> </li>
                    <li className='header__list__item'> <Link to="/team">Team</Link> </li>
                    <li className='header__list__item'> <Link to="/contactUs">Contact As</Link> </li>
                </ul> }
               
            </div>
           
            <div className='header__child'>
                
                <div className='util__icons'>
                    <div className='header__utils'><button><FontAwesomeIcon icon={faSearch} /></button>  Search</div>
                    <div className='header__utils'> <button><FontAwesomeIcon icon={faPhone} /></button> Call</div>
                </div>
                <div className='bar'><button onClick={barStart}><FontAwesomeIcon icon={faBars}/> </button></div>
                
            </div>
        </header>  
    
  )
}

export default Header