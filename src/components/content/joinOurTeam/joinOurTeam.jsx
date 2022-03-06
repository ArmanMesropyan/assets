import React from 'react'
import ExampleForJb from '../exampleForJB/exampleForJb'
import './joinOurTeam.scss'

export default function JoinOurTeam() {
  return (
    <div>
         <ExampleForJb text={'Join our Team!'}/>
         <div className='buttons'>
          <button>Download yor CV</button>
          <button>Sent</button>
        </div>
    </div>
  )
}
