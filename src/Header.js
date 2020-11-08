import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">

       <img className='logo'src="./Assassins Creed Icons/ubi1.png" />
      
            <nav>
            <ul className='headerNavBar'>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                 Uplay+
              </a>
                </li>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                Store
                </a>
                </li>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                More Games
                </a>
                </li>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                 News
                 </a>
                </li>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                Community
                </a>
                </li>
                <li className="navBarItems" >
                <a href="https://store.ubi.com/ie/uplayplus">
                Support
                </a>
                </li>
            </ul>

            </nav>
        </div>
    )
}

export default Header
