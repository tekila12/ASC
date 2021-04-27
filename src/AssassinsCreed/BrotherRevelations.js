import React from 'react'
import './BrotherRevelation.css';
import { Button } from '@material-ui/core';

const BrotherRevelations=()=> {
    return (
        <div data-aos='fade-down'id='rev' className="brotherRevelations">
           <div classsName="odysseyOrigin__Info">
            <img className='revImage'src="./Assassins Creed Icons/Revelation.jpg"  alt=''  />
            <h2 className='h2Asr'>Assassin's Creed Revelations</h2>
            <div className='revLore'>
                <h4>The game continues Desmond's story in the present day, following the events of Brotherhood, where he is trapped in the Animus 2.0,
                    in a comatose state, in which he has found a safe mode known as "the Black Room". Here, Desmond must find a "synch nexus", a key 
                    memory that links him with Altaïr and Ezio, to reintegrate his splintered subconscious and awaken from his coma.[15] While in game,
                    Ezio meets a variety of historical characters, including: Manuel Palaiologos, an heir to the now-lost Byzantine Empire; Byzantine Templars
                    lurking in the shadows of Constantinople Prince Suleiman, a man who will one day become one of the Ottoman Empire's greatest Sultans and his uncle,
                    Prince Ahmet.Other historical figures includes Piri Reis, Niccolo and Maffeo Polo, Ishak Pasha, Yusuf Tazim, Al Mualim,
                    Bayezid II, Selim I, Shahkulu, and Tarik Barleti.Sofia Sartor is based on Portrait of a Young Venetian Woman by Albrecht Durer.</h4>
            
            <div className='buttonas21'>
            <Button variant='outlined' className='revButton'> Visit Website </Button>
            <Button variant='outlined' className='revButton'> Buy Now </Button>
            </div>
            </div>
            </div>

            <div classsName="odysseyOrigin__Info1">
            <img className='brImage'src="./Assassins Creed Icons/Brotherhood.jpg"  alt='' />
            <h2 className='h2Asb'>Assassin's creed Brotherhood</h2>
            <div className='brLore'>
                <h4>Using the Animus 2.0, Desmond Miles attempted to relive one of the later memories of his ancestor, Ezio Auditore, hoping that it would reveal
                    the location of his Apple of Eden, which could allow them to prevent the foretold disaster. However, instead of entering the memory set in 1506,
                    he was forced into a different one, occurring during a battle in Viana. From there, as Ezio looked upon the besieged Viana Castle, he recalled the
                    similar events of the Siege of Monteriggioni, subsequently forcing Desmond back further, into a memory from 1499.</h4>
           
            <div className='buttonas21'>
            <Button variant='outlined' className='brButton'> Visit Website </Button>
            <Button variant='outlined' className='brButton'> Buy Now </Button>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default BrotherRevelations
