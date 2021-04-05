import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/CardView.css'
import sliderL from '../images/hover/sliderArrowL.png'
import sliderR from '../images/hover/sliderArrowR.png'
import play from '../images/hover/play.png'
import add from '../images/hover/add.png'
import like from '../images/hover/like.png'
import dislike from '../images/hover/dislike.png'
import arrow from '../images/hover/arrow.png'

const Card = ({ imageShow, actualMove }) => {
  const move = {
    right: `${actualMove}px`,
  }
  return (
    <div className="card" style={move}>
      <img src={imageShow} alt="Img Show" className="imagePreview" />
      <div className="infoHover">
        <img src={play} alt="Play" className="infoHoverIcons" />
        <img src={add} alt="Add" className="infoHoverIcons" />
        <img src={like} alt="Like" className="infoHoverIcons" />
        <img src={dislike} alt="Dislike" className="infoHoverIcons" />
        <img src={arrow} alt="Arrow" className="infoHoverIcons" />
      </div>
    </div>
  )
}

Card.propTypes = {
  imageShow: PropTypes.string.isRequired,
  actualMove: PropTypes.number.isRequired,
}

const Shows = ({ listImages, actualMove }) => {
  // eslint-disable-next-line max-len
  const listItems = listImages.map((image) => <Card key={image} actualMove={actualMove} imageShow={image} />)

  return (<div>{listItems}</div>)
}

Shows.propTypes = {
  listImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  actualMove: PropTypes.number.isRequired,
}

const CardView = ({ title, listImages }) => {
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
        <span className="leftArrow">
          <button className="arrowStyle" type="button" onClick={() => scroll(-540)}>
            <img src={sliderL} alt="L" />
          </button>
        </span>
      )
    }
    return <span />
  }

  return (
    <div className="spinner">
      <div className="title">{title}</div>
      <div className="row">
        <LeftArrow />
        <Shows listImages={listImages} actualMove={actualMove} />
        <span className="rightArrow">
          <button className="arrowStyle" type="button" onClick={() => scroll(540)}>
            <img src={sliderR} alt="R" />
          </button>
        </span>
      </div>
    </div>
  )
}

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  listImages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CardView
