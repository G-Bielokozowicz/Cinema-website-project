import React from 'react'
import MovieCarousel from '../components/MovieCarousel'
import PlayingToday from '../components/PlayingToday'


function Home() {
  return (
    <div>
        <MovieCarousel/>
        <PlayingToday/>
    </div>
  )
}

export default Home