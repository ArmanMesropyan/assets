import React from 'react'
import ExampleForJb from '../exampleForJB/exampleForJb'
import './becomeAsPartner.scss'
export default function BecomeAPartner() {
  return (
    <div>
        <ExampleForJb text={'Become a partner'}/>
          <div className='inputs'>
            <input type="text" placeholder='Name Surname'/>
            <input type="text" placeholder='Phone Number'/>
            <button>Sent</button>
          </div>
    </div>
  )
}
