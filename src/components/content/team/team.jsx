import React from 'react'
import './team.scss'
import team from './#team__img/team.png'
import { users } from './team_uesers';
import { Link } from 'react-router-dom';



export default function Team() {
  return (
      <div>
    <div className="team">
        <div className='team__title'>
            <div className='tt__child'>
                <h6>Meet Our Team</h6>
                <p>best ones in our field</p>
            </div>
            <div className='tt__child'>
               <Link to='/joinTeam'> <button>Join our Team!</button></Link>
               <Link to='/BecomePartner'> <button>Become a Partner</button></Link>
            </div>
        </div>
        <div className="team__cover">
            <img src={team} alt="team" />
        </div>
        <div className="team__content">
            <h6>Best ones in our field</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nisl, lectus a, tincidunt vitae dignissim mattis.
                Consectetur odio et dolor in diam. Adipiscing varius
                risus lorem diam quam mi. Auctor ut tristique pretium,
                egestas at. Neque dolor nulla sapien adipiscing blandit nibh.
                Lectus faucibus lacus, purus eget magna gravida non. Tellus, 
                tellus, egestas arcu lobortis mattis. Leo fames pharetra, euismod
                varius justo, feugiat sit. Sit consectetur est convallis ullamcorper
                cras facilisis est scelerisque pulvinar. Cursus egestas pulvinar ac
                sollicitudin vestibulum tellus purus. Purus feugiat a eget consectetur
                morbi dignissim nibh. Mauris at id eget orci sollicitudin quis vitae.
                Massa pretium vel gravida viverra tristique libero. Sed turpis egestas
                habitant diam elit in facilisis vitae. Nam vitae, sit turpis at nunc.
                Erat interdum urna, dui volutpat ipsum. Nisl nascetur dictum faucibus
                donec. Turpis luctus vitae donec libero, netus amet
            </p>
        </div>
        
    </div>
    <div className="team__peoples">
    {users.map(peoples => {
        return  <div className='peoples' key={peoples.id}>
                   <div className='p__img'> <img src={peoples.img} alt="img" /></div>
                    <b>{peoples.name}</b>
                    <p>{peoples.positiion}</p>
                </div>
    })}
</div>
</div>

  )
}
