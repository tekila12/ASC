import React from 'react'
import "./OdysseyOrigin.css"
import { Button } from '@material-ui/core';

const OdysseyOrigin=({useEffect})=> {
    return (
    
        <div data-aos='fade-down' id='origins' className='OdysseyOrigins'>
            <div classsName="odysseyOrigin__Info">
            <img className='odyyseyImage1'src="./Assassins Creed Icons/Odyssey.jpg" alt='' />
            <h2 className='h2Ody'>Assassin's Creed Odyssey</h2>
            <div className='odyyseyLore'>
               
                <h4>The game's historical story is set in 431–422 BC, four hundred years before the events of Assassin's Creed Origins. 
                It recounts a secret mythological history set during the Peloponnesian War, which was fought between the city-states of Greece. 
                The player takes on the role of a mercenary and is able to fight for the Delian League, led by Athens, or the Peloponnesian League, led by Sparta. 
                The game's main storyline has the player character attempting to restore their fractured family after they and their siblings were thrown off a cliff
                in their youth and left for dead by their father by the command of the Spartan oracle. Parallel quest lines deal with the extirpation of a malign cult
                spanning the Greek world, and the discovery of artifacts and monsters from Atlantean times.</h4>
                <div className='buttonas21'>
                <Button variant='outlined' className='asoButton'> Visit Website </Button>
                <Button variant='outlined' className='asoButton'> Buy Now </Button>
                </div>
            </div>
            </div>

            <div classsName="odysseyOrigin1__Info1">
            <img className='originImage'src="./Assassins Creed Icons/Origins.jpg"  alt=''  />
            <h2 className='h2Origins'>Assassin's creed Origins</h2>
            <div className='originsLore'>
                <h4>The player takes on the role of a Medjay named Bayek and his wife Aya, as they work to protect the people of the Ptolemaic Kingdom during
                a time of widespread upheaval: the Pharaoh, Ptolemy XIII, struggles to maintain his rule whilst harbouring ambitions of expanding his kingdom; 
                his sister, the recently deposed Cleopatra, begins marshalling loyalist forces to launch a counter-coup against Ptolemy; and frequent incursions
                into the Kingdom by the Roman Republic under the command of Julius Caesar lead to fears of an imminent invasion. Bayek's role as a Medjay brings
                him and Aya into contact with the secretive forces manipulating these events and into becoming the first Assassins.</h4>
                <div className='buttonas21'>
                <Button variant='outlined' className='asorButton'> Visit Website </Button>
                <Button variant='outlined' className='asorButton'> Buy Now </Button>
                </div>
            </div>
            </div>
        </div>
          
    )
}

export default OdysseyOrigin
