import React from 'react'
import MovieCarousel from '../components/MovieCarousel'
import PlayingToday from '../components/PlayingToday'
import QRCode from '../components/QRCodePom'


function Home() {
  return (
    <div>
      <QRCode/>
        <MovieCarousel/>
        <PlayingToday/>
    </div>
  )
}

export default Home