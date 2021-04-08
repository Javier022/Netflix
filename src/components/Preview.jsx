/* eslint-disable max-len */
import React from 'react'
import '../../public/css/Preview.css'
import banner from '../../public/images/banner.jpg'
import bannerLogo from '../../public/images/bannerLogo.png'
import play from '../../public/images/play.png'
import info from '../../public/images/info.png'

const Banner = () => (
  <div className="preview">
    <div className="info">
      <img src={bannerLogo} alt="FMA Logo" />
      <div>Watch Season 1 Now</div>
      <p>Edward and Alphonse Elric want to restore their bodies after a disastrous failed attempt to bring their mother back to life through alchemy.</p>
      <div className="buttons">
        <Play />
        <Info />
      </div>
    </div>
    <img src={banner} alt="FMA Banner" className="banner" />
  </div>
)

const Play = () => (
  <button type="button" className="play">
    <img src={play} alt="Play" />
    Play
  </button>
)

const Info = () => (
  <button type="button" className="buttonInfo">
    <img src={info} alt="Info" />
    More Info
  </button>
)

const Preview = () => (
  <Banner />
)

export default Preview
