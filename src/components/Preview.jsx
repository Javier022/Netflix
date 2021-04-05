/* eslint-disable max-len */
import React from 'react'
import '../css/Preview.css'
import banner from '../images/banner.jpg'
import bannerLogo from '../images/bannerLogo.png'
import play from '../images/play.png'
import info from '../images/info.png'

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
