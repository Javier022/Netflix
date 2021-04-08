import React from 'react'
import CardView from './CardView'
import CardViewOriginals from './NetflixOriginals'
import Anime1 from '../../../public/images/cover/anime/Anime1.jpeg'
import Anime2 from '../../../public/images/cover/anime/Anime2.jpg'
import Anime3 from '../../../public/images/cover/anime/Anime3.png'
import Anime4 from '../../../public/images/cover/anime/Anime4.jpg'
import Anime5 from '../../../public/images/cover/anime/Anime5.jpg'
import Anime6 from '../../../public/images/cover/anime/Anime6.jpg'
import Anime7 from '../../../public/images/cover/anime/Anime7.jpg'
import Anime8 from '../../../public/images/cover/anime/Anime8.jpg'
import TV1 from '../../../public/images/cover/usTV/TV1.jpg'
import TV2 from '../../../public/images/cover/usTV/TV2.jpg'
import TV3 from '../../../public/images/cover/usTV/TV3.jpg'
import TV4 from '../../../public/images/cover/usTV/TV4.jpg'
import TV5 from '../../../public/images/cover/usTV/TV5.jpg'
import TV6 from '../../../public/images/cover/usTV/TV6.jpg'
import TV7 from '../../../public/images/cover/usTV/TV7.jpg'
import O1 from '../../../public/images/cover/originals/Original1.jpg'
import O2 from '../../../public/images/cover/originals/Original2.jpg'
import O3 from '../../../public/images/cover/originals/Original3.jpg'
import O4 from '../../../public/images/cover/originals/Original4.jpg'
import O5 from '../../../public/images/cover/originals/Original5.jpg'
import O6 from '../../../public/images/cover/originals/Original6.jpeg'
import O7 from '../../../public/images/cover/originals/Original7.jpg'

const style = {
  display: 'block',
}

const Recommendations = () => (
  <div style={style}>

    <CardView title="Anime & Anime Inspired" listImages={[Anime1, Anime2, Anime3, Anime4, Anime5, Anime6, Anime7, Anime8]} />
    <CardView title="US TV Shows" listImages={[TV1, TV2, TV3, TV4, TV5, TV6, TV7]} />
    <CardViewOriginals title="Netflix Originals" listImages={[O1, O2, O3, O4, O5, O6, O7]} />

  </div>
)

export default Recommendations
