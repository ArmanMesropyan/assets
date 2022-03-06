import React, { useState } from 'react'
import './salary.scss'
export default function Salary() {
    const initialState = {
        pay: 0,
        hourlyPay: 0,
        weeklyPay: 0,
        monthlyPay: 0,
        yearlyPay: 0,
        
    }


    const changeHourly = (event) =>{
        setState({
            hourlyPay: event.target.value,
            weeklyPay: event.target.value*40,
            monthlyPay: event.target.value*160,
            yearlyPay: event.target.value*2080,
            
          })
    }
    const changeWeekly = (event) =>{
        setState({
            hourlyPay: event.target.value/40,
            weeklyPay: event.target.value,
            monthlyPay: event.target.value*4,
            yearlyPay: event.target.value*52,
            
          })
    }
    const changeMonthly = (event) =>{
        setState({
            hourlyPay: Math.round(100*event.target.value/160)/100,
            weeklyPay: Math.round(100*event.target.value/4)/100,
            monthlyPay: event.target.value,
            yearlyPay: Math.round(100*event.target.value*12)/100,
            
          })
    }
    const changeYearly = (event) =>{
        setState({
            hourlyPay: Math.round(100*event.target.value/2080)/100,
            weeklyPay: Math.round(100*event.target.value/52)/100,
            monthlyPay: Math.round(100*event.target.value/12)/100,
            yearlyPay: Math.round(100*event.target.value)/100,
          })
    }





    const [state , setState ] = useState(initialState)
  return (
    <div className='salary'>
            <div className = 'salary__header'>
                <h1>Salary Calculator</h1>
            </div>

        <div className='wrapper__salary'>
                <div className = 'calc__cont'>
                    <div className='pay__salary'>
                        <h3>Hourly Pay</h3>
                        <h3>$ {state.hourlyPay}</h3>
                    </div>
                 
                    <div className='inp__salary'>
                        <input onChange = {changeHourly}></input>
                    </div>
                </div>
                <div className = 'calc__cont'>
                    <div className='pay__salary'>
                        <h3>Weekly Pay</h3>
                        <h3>$ {state.weeklyPay}</h3>
                    </div>
                 
                    <div className='inp__salary'>
                        <input onChange = {changeWeekly}></input>
                    </div>
                </div>
                <div className = 'calc__cont'>
                    <div className='pay__salary'>
                        <h3>Monthly Pay</h3>
                        <h3>$ {state.monthlyPay}</h3>
                    </div>
                 
                    <div className='inp__salary'>
                        <input onChange = {changeMonthly}></input>
                    </div>
                </div>
                <div className = 'calc__cont'>
                    <div className='pay__salary'>
                        <h3>Yearly Pay</h3>
                        <h3>$ {state.yearlyPay}</h3>
                    </div>
                 
                    <div className='inp__salary'>
                    <input onChange = {changeYearly}></input>
                    </div>
                </div>

                
              
              
        
        </div>
            
    </div>
  )
}
