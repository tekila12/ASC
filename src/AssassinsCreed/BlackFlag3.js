import React from 'react'
import './BlackFlag3.css';
import { Button } from '@material-ui/core';
const BlackFlag3=({useEffect})=> {
    return (
        <div data-aos='fade-down' id='flag'className='blackFlag3'>
            <div classsName="blackFlag__Info">
            <img className='blackImage'src="./Assassins Creed Icons/BlackFlag.jpg" />
            <h2 className='h2Bf'>Assassin's Creed Black Flag</h2>
            <div className='blackFlag__Lore'>
                <h4>As is the case in previous games in the Assassin's Creed series, the story is divided into two intertwined halves, with one in the present day,
                    one in a historical setting (1715), and the events of each influencing the other. Although the present-day story had previously established that 
                    an Animus was required to view one's ancestors memories, the ending of Assassin's Creed III reveals that Abstergo can now view a host's genetic 
                    memories simply by sequencing the host's DNA. As such, the player character is hired by Abstergo Entertainment to investigate a pivotal character
                    in Desmond's ancestry, the Assassin Edward Kenway. A notorious pirate and privateer operating during the Golden Age of Piracy, Kenway's story 
                    is set in the Caribbean, and mixes open-ended ship-based exploration with combat and land-based adventures in Cuba and Jamaica, and on a number of 
                    Caribbean islands, parts of southern Florida and eastern Mexico.</h4>
                    
                    <div className='buttonas21'>
                    <Button variant='outlined' className='bfButton'> Visit Website </Button>
                <Button variant='outlined' className='bfButton'> Buy Now </Button>
                    </div>
            </div>
            </div>

            <div classsName="Info1">
            <img className='As3Image'src="./Assassins Creed Icons/As3.jpg" />
            <h2 className='h2As3'>Assassin's creed 3</h2>
            <div className='As3Lore'>
                <h4>Following the events of Assassin's Creed: Revelations, the game explores the life of an 18th-century assassin in Colonial America during the American Revolution;
                    a half-English, half-Mohawk man named Ratonhnhaké:ton, also known as Connor, whose father is Grand Master of the Templar Order in the colonies. Connor is caught up
                    in the Assassins' conflict with the Templar order when his Native American village is attacked by the Templars, who intend to seize control of the newly forming country.
                    Connor's story spans through two decades of his life. From his childhood in 1760 to 1783. Boston and New York City are cities that can be explored, as well as the American Colonial 
                    Frontier, spanning forest, cliffs, rivers, Connor's Mohawk village, and the settlements of Lexington, and Concord. The player can hunt small and large animals, and approximately one third of 
                    the story takes place in the Frontier. The city of Philadelphia can also be visited at one point during the game, as can The Caribbean during several naval missions. The entire Eastern
                    seaboard is also explorable via Connor's captaining his naval warship, the Aquila.</h4>
                    <div className='buttonas21'>
                    <Button variant='outlined' className='as3Button'> Visit Website </Button>
                <Button variant='outlined' className='as3Button'> Buy Now </Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BlackFlag3
