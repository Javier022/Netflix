import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../../public/css/Header.css'
import logo from '../../../public/images/netflix_logo.png'
import search from '../../../public/images/search.png'
import gift from '../../../public/images/gift.png'
import notification from '../../../public/images/notification.png'
import perfil from '../../../public/images/perfil.png'
import arrow from '../../../public/images/arrow.png'

const Options = ({ actualBackground }) => {
  const background = {
    backgroundColor: actualBackground,
  }

  return (
    <div className="header" style={background}>
      <img src={logo} alt="Netflix" className="logo" />
      <ul className="horizontalList">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Watch Again</li>
      </ul>
      <div className="icons">
        <img src={search} alt="Search" className="icon" />
        <img src={gift} alt="Gift" className="icon" />
        <img src={notification} alt="Notification" className="icon" />
        <img src={perfil} alt="Perfil" className="perfil" />
      </div>
      <img src={arrow} alt="Arrow" className="arrow" />
    </div>
  )
}

Options.propTypes = {
  actualBackground: PropTypes.string.isRequired,
}

const Header = () => {
  const [actualBackground, setActualBackground] = useState('transparent')

  const handleScroll = () => {
    if (!(window.pageYOffset === 0)) {
      setActualBackground('black')
    } else {
      setActualBackground('transparent')
    }
  }
  window.addEventListener('scroll', handleScroll)

  return <Options actualBackground={actualBackground} />
}

export default Header
