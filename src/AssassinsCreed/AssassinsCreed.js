import React from 'react'
import './AssassinsCreed.css'
import { Button } from '@material-ui/core';
const AssassinsCreed=({useEffect})=> {
    return (
        <div data-aos='fade-down' id='as2' className="assassinsCreed">
            <div classsName="odysseyOrigin__Info">
            <img className='assassinsCreed2'src="./Assassins Creed Icons/As2.jpg"  alt='' />
            <h2 className='h2As2'>Assassin's Creed 2</h2>
            <div className='As1Lore'>
                <h4>After the events of Assassin's Creed, test subject Desmond Miles is rescued from confinement by undercover Assassin Lucy Stillman and taken to a remote safe house,
                    where he meets her team, consisting of historian and analyst Shaun Hastings and technician Rebecca Crane. Using design plans stolen by Lucy, they have constructed 
                    their own version of the Animus, dubbed "Baby", which they intend to use to train Desmond as an Assassin through the so-called "Bleeding Effect", which allows 
                    the user to learn all their ancestor's skills instantly. Desmond is assigned to investigate the memories of his ancestor Ezio Auditore da Firenze, starting with his
                    birth to a wealthy Florentine family in the late 15th century.</h4>
                    
                    <div className='buttonas21'>
                    <Button variant='outlined' className='as2Button'> Visit Website </Button>
                <Button variant='outlined' className='as2Button'> Buy Now </Button>
                    </div>
            </div>
            </div>

            <div classsName="odysseyOrigin__Info1">
            <img className='creedImage'src="./Assassins Creed Icons/As1.jpg"  alt='' />
            <h2 className='h2As1'>Assassin's creed 1</h2>
            <div className='As2Lore'>
                <h4>Desmond Miles is captured by Abstergo and forced to use a machine called the Animus to explore Altaïr ibn-La'Ahad's memories during the time of the Third Crusade.
                    Altaïr is demoted to a Novice of the Assassin Brotherhood by Al Mualim, the Brotherhood's leader, and tasked with assassinating the nine Knights Templar, including 
                    Robert IV of Sablé, to regain his former status. Altaïr discovers that Al Mualim is also a Templar and holds a Piece of Eden. When Altaïr defeats Al Mualim and
                    recovers the piece, he and those watching the Animus view a holographic map showing where other artifacts are located across the globe.
                    Assassin's Creed introduced core elements that remained in the rest of the game series. The game creates fictionalized, historical versions of Masyaf 
                    (the Brotherhood's location), Jerusalem, Acre and Damascus, and incorporates a number of documented historical figures into the story. Other core elements include
                    the virtualized Animus system, free running, climbing, stealth, parkour, and the initial formulation of the combat system. The game requires the player to complete
                    a number of side quests before they are able to obtain an assassin quest from a local Brotherhood guidemaster in each city, but this side quest prerequisite was
                    abandoned in future games.</h4>
                    <div className='buttonas21'>
                    <Button variant='outlined' className='as1Button'> Visit Website </Button>
                <Button variant='outlined' className='as1Button'> Buy Now </Button>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default AssassinsCreed
