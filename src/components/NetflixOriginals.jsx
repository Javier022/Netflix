import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../public/css/CardView.css'
import '../../public/css/NetflixOriginals.css'
import sliderL from '../../public/images/hover/sliderArrowL.png'
import sliderR from '../../public/images/hover/sliderArrowR.png'
import play from '../../public/images/hover/play.png'
import add from '../../public/images/hover/add.png'
import arrow from '../../public/images/hover/arrow.png'

const CardOriginals = ({ imageShow, actualMove }) => {
  const move = {
    right: `${actualMove}px`,
  }
  return (
    <div className="cardOriginals" style={move}>
      <img src={imageShow} alt="Img Show" className="imagePreviewOriginals" />
      <div className="infoHoverOriginals">
        <img src={play} alt="Play" className="infoHoverIconsOriginals" />
        <img src={add} alt="Add" className="infoHoverIconsOriginals" />
        <img src={arrow} alt="Arrow" className="infoHoverIconsOriginals" />
      </div>
    </div>
  )
}

CardOriginals.propTypes = {
  imageShow: PropTypes.string.isRequired,
  actualMove: PropTypes.number.isRequired,
}

const Shows = ({ listImages, actualMove }) => {
  // eslint-disable-next-line max-len
  const listItems = listImages.map((image) => <CardOriginals key={image} actualMove={actualMove} imageShow={image} />)

  return (<div>{listItems}</div>)
}

Shows.propTypes = {
  listImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  actualMove: PropTypes.number.isRequired,
}

const CardViewOriginals = ({ title, listImages }) => {
  const [actualMove, setActualMove] = useState(0)
  const [showLeft, setShowLeft] = useState(false)

  const scroll = (scrollOffset) => {
    const totalWidth = document.body.scrollWidth - document.body.clientWidth

    if (actualMove + scrollOffset <= 0 || actualMove + scrollOffset >= totalWidth) {
      if (actualMove < totalWidth && actualMove + scrollOffset > 0) {
        setActualMove(totalWidth + scrollOffset)
        setShowLeft(true)
      } else {
        setActualMove(0)
        setShowLeft(false)
      }
    } else {
      setActualMove(totalWidth + scrollOffset)
      setShowLeft(true)
    }
  }

  const LeftArrow = () => {
    if (showLeft) {
      return (
        <span className="leftArrowOriginals">
          <button className="arrowStyleOriginals" type="button" onClick={() => scroll(-490)}>
            <img src={sliderL} alt="L" />
          </button>
        </span>
      )
    }
    return <span />
  }

  return (
    <div className="spinnerOriginals">
      <div className="title">{title}</div>
      <div className="row">
        <LeftArrow />
        <Shows listImages={listImages} actualMove={actualMove} />
        <span className="rightArrowOriginals">
          <button className="arrowStyleOriginals" type="button" onClick={() => scroll(490)}>
            <img src={sliderR} alt="R" />
          </button>
        </span>
      </div>
    </div>
  )
}

CardViewOriginals.propTypes = {
  title: PropTypes.string.isRequired,
  listImages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CardViewOriginals
