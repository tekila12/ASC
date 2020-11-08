import React,{useEffect} from 'react'
import './SyndicateUnity.css'

import { Button } from '@material-ui/core';

const SyndicateUnity=(useEffect)=> {
   
  
   
    return (
       
        <div data-aos='fade-down' id='unity' className='syndicateUnity '>
        <div classsName="syndicateInfo">
        <img className='syndicateImage'src="./Assassins Creed Icons/Syndicate.png" />
        <h2 className='h2Os'>Assassin's Creed Syndicate</h2>
        <div className='syndicateLore'>
            <h4>In 1868, at the tail end of the Industrial Revolution, with the Assassin Brotherhood all but eradicated in Victorian London, twins Jacoband, 
            Evie Frye leave Crawley for London and arrive to find a city controlled by the Templars, with both the Church and the Monarchy losing their power.
            Raised as Assassins to follow the Creed, Jacob and Evie aim to take back the city from Templar control by infiltrating and uniting London's criminal underworld,
            aided by notable figures of the era such as novelist Charles Dickens, biologist Charles Darwin, inventor Alexander Graham Bell, political theorist Karl Marx,
            nurse Florence Nightingale, Duleep Singh (the last maharajah of the Sikh Empire), Sergeant Frederick Abberline of the Metropolitan Police Service
            (known for his investigation of Jack the Ripper), and Queen Victoria. Additionally, Jacob's granddaughter, Lydia Frye  appears in a separate World War I segment,
            where she aids Winston Churchill in defending London against a new enemy espionage faction.</h4>
            <div className='buttonas21'>
                <Button variant='outlined' className='synButton'> Visit Website </Button>
                <Button variant='outlined' className='synButton'> Buy Now </Button>
                </div>
            </div>
            </div> 
            <div classsName="odysseyOrigin__Info1">
            <img className='unityImage'src="./Assassins Creed Icons/Unity.jpg" />
            <h2 className='h2Ou'>Assassin's creed Unity</h2>
            <div className='unityLore'>
                <h4>
                Arno's story starts in Versailles as a child, but for most of the story he is in Paris. His adventure in Paris starts on the eve of the French Revolution in 1789,
                and extends up to the Thermidorian Reaction in 1794. The modern day setting focuses on the Assassins contacting the player and requesting their help to explore Arno
                in the past, as well as helping in the present. Co-operative multiplayer missions follow the development of the Brotherhood of Assassins during the French Revolution. 
                In addition, "time anomalies" are introduced during the story. Accessing them takes Arno to various points of Parisian history, such as Paris' Belle Époque, or its occupation
                by Nazi Germany during World War II.
                </h4>
                <div className='buttonas21'>
                <Button variant='outlined' className='unityButton'> Visit Website </Button>
                <Button variant='outlined' className='unityButton'> Buy Now </Button>
                </div>
                </div>
                </div>
                </div>
  
        )
}

export default SyndicateUnity
