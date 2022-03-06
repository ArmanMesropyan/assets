import React from 'react'
import ex from './#ex__img/example.png'
import './exampleForJb.scss'
export default function ExampleForJb(props) {
  return (
    <div className='exp'>
    <div className='example__for__jb'>
        <div className='ex_child'>
            <h6>{props.text}</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Orci duis cursus sed suspendisse cras tincidunt donec posuere.
                Aenean sed vivamus cum non tellus nunc amet, facilisis non.
                Nisl gravida aliquet at dolor, eu tortor aenean non. Fames
                ut nulla malesuada adipiscing gravida velit aenean. Eget 
                potenti mauris venenatis euismod semper egestas. Etiam imperdiet 
                non et pretium ac lacus mattis vitae. Dictumst duis eget lectus
                vitae quis dui curabitur. Mattis id nisl elit est sed tellus mauris.
                 Enim, nibh sit at id erat porta orci dui. Pharetra, ac risus 
                 parturient pellentesque varius.
            </p>
        </div>
        <div className='ex_child'>
            <img src={ex} alt="ex_img" />
        </div>
    </div>
    </div>
  )
}
