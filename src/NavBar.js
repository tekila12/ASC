import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
        <div className="navBar">   
          <nav>
            <ul className="ascList">
              <li className='ascGames'>
                <a href='#valhalla' >
                    Assassin's Creed Valhalla
                    </a>
                </li>
                
                <li onClick className='ascGames' >
                  <a href='#origins' >
                Assassin's Creed Odyssey
                </a>
                </li>
              
                <li className='ascGames'>
                  <a href='#origins' >
                  Assassin's Creed Origins
                  </a>
                </li>
                <li className='ascGames'>
                <a href='#unity' >
                      Assassin's Creed Syndicate 
                      </a>
                </li>
                <li className='ascGames'>
                <a href='#unity' >
                    Assassin's Creed Unity
                    </a>
                </li >
                    <li className='ascGames'>
                    <a href='#flag' >
                      Assassin's Creed IV Black Flag  
                    </a>
                    </li>

                <li className='ascGames'>
                <a href='#flag' >
               Assassin's Creed III
               </a>
                </li>

                <li className='ascGames'>
                <a href='#rev' >
                  Assassin's Creed Revelations
                  </a>
                </li>
                <li className='ascGames'>
                <a href='#rev' >
                      Assassin's Creed Brotherhood
                    </a>
                </li>
                <li className='ascGames'>
                <a href='#as2' >
                  Assassin's Creed 2
                  </a>
                </li>
                <li className='ascGames'>  
                <a href='#as2' >
                 Assassin's Creed 
                 </a>  
                </li>

               
                </ul>
                <div className='ascIcons'>
            
                <img className='ascImages' src='./Assassins Creed Icons/asVA.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/aso.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/asor.png'  alt=''   />
                <img className='ascImages' src='./Assassins Creed Icons/syn.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/unity.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/asb.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/as3.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/asr.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/asbr.png' alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/as2.png'  alt=''  />
                <img className='ascImages' src='./Assassins Creed Icons/as1.png'  alt=''  />
                </div> 
             </nav>
 

        </div>

  )
}

export default NavBar

