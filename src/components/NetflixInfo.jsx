import React from 'react'
import '../../public/css/NetflixInfo.css'
import facebook from '../../public/images/facebook.png'
import instagram from '../../public/images/instagram.png'
import twitter from '../../public/images/twitter.png'
import youtube from '../../public/images/youtube.png'

const SocialMedia = () => (
  <div className="netflixInfo">
    <div>
      <img src={facebook} alt="Facebook" className="socialMediaIcons" />
      <img src={instagram} alt="Instagram" className="socialMediaIcons" />
      <img src={twitter} alt="Twitter" className="socialMediaIcons" />
      <img src={youtube} alt="Youtube" className="socialMediaIcons" />
    </div>
    <ul className="extraInfo">
      <li>Audio and Subtitles</li>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
  </div>
)

const NetflixInfo = () => (
  <SocialMedia />
)

export default NetflixInfo
