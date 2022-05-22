import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'



function MovieCarousel() {

    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
      axios.get('http://localhost:5000/movies/')
      .then((response) => {
        setMovies(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
      getMovies()
    },[])

    return (
        <Wrapper>
            <Splide options = {{
                type: 'loop',
                perPage: 4,
                arrows: false,
                pagination: false,
                autoplay: true,
                fixedWidth: 200,
                fixedHeight: 300,
                perMove: 1,
                pauseOnHover: true,
                }}>
                {movies.map((movie)=>{
                    return (
                        <SplideSlide key={movie._id}>
                            <img src={movie.moviePosterURL} width={200} height={300} alt='Poster'/>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 3rem;
    margin-left: 35.5rem;
    margin-right: auto;
    width: 800px;
    outline: 1px groove #d34d189e;
`



export default MovieCarousel