/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import '../../public/css/Preview.css'
import banner from '../../public/images/banner.jpg'
import bannerLogo from '../../public/images/bannerLogo.png'
import play from '../../public/images/play.png'
import info from '../../public/images/info.png'
import preview from '../../public/images/Preview.mp4'

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

const Preview = () => {
  const [isFirstTime, setFistTime] = useState(true)
  const video = React.createRef()

  const showImage = () => {
    video.current.load()
  }

  useEffect(() => {
    if (isFirstTime) {
      video?.current.play()
      setFistTime(false)
    }
  }, [isFirstTime])

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setFistTime(true)
    } else if (window.pageYOffset >= 300) {
      video.current.load()
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
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
      <video muted poster={banner} alt="FMA Banner" className="banner" onEnded={showImage} ref={video}>
        <source src={preview} type="video/mp4" />
      </video>
    </div>
  )
}

export default Preview
