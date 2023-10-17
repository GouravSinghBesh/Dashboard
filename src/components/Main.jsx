import React from 'react'

import './main.css'
import Header from './Header'
import Cards from './Cards'
import Graph from './Graph'
import Footer from './Footer'

const Main = () => {
  return (<>
    <div class='top-container'>
      <Header />
      <Cards/>
      <Graph/>
      <Footer/>
    </div>

  </>

  )
}

export default Main