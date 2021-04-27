import React from 'react'
import './Valhalla.css'
import { Button } from '@material-ui/core';
function Valhalla() {
    return (
        <div  data-aos="fade-down" id='valhalla' className='Valhalla'>
         <div className='ValhallaMain__Info'>
          <img className='ValhallaImage1'
            src="./Assassins Creed Icons/Valhalla.jpg"  alt=''  />
           
              <h1>Assassin's Creed Valhalla </h1>
               <div className='valhalaInfo'>
                <h4>"Driven from Norway by endless wars and dwindling resources in the ninth century AD,
                    players will lead Eivor’s clan of Norsemen across the icy North Sea to the rich lands
                    of England’s broken kingdoms. Players must carve out a new future for their clan,
                    reliving the ruthless fighting style of Viking warriors with a revamped combat system that
                    includes the ability to dual-wield weapons against a greater variety of enemies than ever before. 
                    "To secure resources players can lead raids to select locations using their longship to earn much-needed
                    riches and resources. As the Vikings begin to settle in their new home, they encounter resistance from
                    the Saxons including King Aelfred of Wessex, who denounces them as heathens and looks to be the sole ruler
                    of a civilized England. Against all odds, Eivor must do what is necessary to keep Valhalla within reach."</h4>
                    <Button variant='outlined' className='valButton'> Visit Website </Button>
                      </div>
                       </div>
                       </div>
    )
}

export default Valhalla

