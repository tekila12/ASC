import React,{useEffect} from 'react'
import './Footer.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div  className='footer'>
            <div className='footerHead'>
                <h6>Visit Other Ubisoft Channels</h6>
                <TwitterIcon />
                <FacebookIcon />
                <YouTubeIcon />
                <InstagramIcon />
            </div>
            <div className='footerInfo'>
              <div className='gridInfo'>
               <div className='footerUbi'>
                <img className='logoDown'src="./Assassins Creed Icons/ubi1.png" />
                  <h5>Privacy </h5>
                  <h5>Terms</h5>
                  <h5>Internet-based ads</h5>
               <div className='footerUbi1'>
                  <h5>Contacts</h5>
                  <h5>Do not sell my personal information</h5>
               </div>   
               </div>
               <h4>Club</h4>
               <h4>Company</h4>
               <h4>Careers</h4>
               <h4>Press</h4>
               <h4>Investors</h4>
               <h4>Locations</h4>
               <h4>Playtest</h4>
               </div>

<div className='esrbInfo'>
<p className='Ubisoftp'>© 2020 Ubisoft Entertainment. All Rights Reserved. Ubisoft,
Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p>
<img className="esrb" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3TWaC
i5CyuZBRpzsRP1iy/6384003e7b534b4962db554a21c696bb/esrb-privacy-footer.jpg" loading="lazy"/>
</div>

            </div>
        </div>
    )
}

export default Footer


