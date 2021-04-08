import React from 'react'
import ReactDOM from 'react-dom'
import Header from './client/components/Header'
import Preview from './client/components/Preview'
import Recommendations from './client/components/Recommendations'
import NetflixInfo from './client/components/NetflixInfo'

const App = () => (
  <div>
    <Header />
    <Preview />
    <Recommendations />
    <NetflixInfo />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
