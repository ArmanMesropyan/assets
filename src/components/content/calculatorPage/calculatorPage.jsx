import React from 'react'
import Offer from './../homePage/homeFooter/offer';
import './calculatorPage.scss'
import calck from  './#calckulator__img/calckulator.jpg'
import { Link, Route, Routes } from 'react-router-dom';
import Salary from './salaryCalculator/salary';
import BenefitCalculator from './benefitСalculator/benefitCalculator';



export default function CalculatorPage() {
  return (
    <div className='calculatorPage'>
        <div className="calck__back">
            <p>Your Calculator</p>
            <img src={calck} alt="calck" />    
        </div>
        <div className="calc__links">
            <ul className='list__calc'>
              <li className='calc__item'><Link to="/calculator/salaryCalc" >Salary calculator</Link></li>
              <li className='calc__item'><Link to="/calculator/benefitCalc">Benefit calculator </Link></li>
              <li className='calc__item'>Loan calculator</li>
              <li className='calc__item'>Property tax calculator</li>
              <li className='calc__item'>Vacation fee calculator</li>
            </ul>
        </div>
              <Routes>
                <Route path='/salaryCalc' element= {<Salary/>}/>
                <Route path='/benefitCalc' element= {<BenefitCalculator/>}/>
              </Routes>



        <Offer/>
    </div>
  )
}
