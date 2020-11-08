import React,{useRef, useEffect, useState} from 'react'
import './MainBar.css';

import MenuIcon from '@material-ui/icons/Menu';
import NavBar from './NavBar';
function MainBar() {
    const ref=useRef()
    const [isNavBarOpen, setIsNavBarOpen]= React.useState(false) 
 



    function openNavBar()
    {setIsNavBarOpen(true) }
    function closeNavBar()
    { setIsNavBarOpen(false)}
    

    useEffect(() => { document.addEventListener('click', handleClick); 
    return () => { document.removeEventListener('click', handleClick); }; }, []);
    const handleClick= (e) => 
    {if(ref.current && !ref.current.contains(e.target))
    closeNavBar();  };
    

         
         
        
    return (
        <div  ref={ref} className="mainBar">
        <div  className="ascBar">
         {isNavBarOpen?<NavBar/>:null}<MenuIcon onClick={() => setIsNavBarOpen(!isNavBarOpen)} className='Menu' />
          </div>
         <img className='asc__logo' src="./Assassins Creed Icons/Ass1.png"/>
        </div>
        
    )
}

export default MainBar

