import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Preview from './components/Preview'
import Recommendations from './components/Recommendations'
import NetflixInfo from './components/NetflixInfo'

const App = () => (
  <div>
    <Header />
    <Preview />
    <Recommendations />
    <NetflixInfo />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
