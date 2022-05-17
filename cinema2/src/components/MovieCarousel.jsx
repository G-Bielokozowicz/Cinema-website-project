import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import styled from 'styled-components'

// tu będzie trzeba z bazy danych brać plakaty

function MovieCarousel() {


    return (
        <div>
            <Splide options = {{
                perPage: 5,
                arrows: false,
                pagination: false,
                }}>
                
                {(() => {
                    let test = [];
                    for (let i = 0; i <= 10; i++) {
                        test.push(<SplideSlide>
                                    <FillerPoster/>
                                </SplideSlide>);
                    }
                    return test;
                })()}
            </Splide>
        </div>
    )
}

const Wrapper = styled.div`
    
`

const FillerPoster = styled.div`
    width: 200px;
    height: 300px;
    background-color: #dbdada;
    border-radius: 5px;
    //margin-right: 15px;
    display: block;
    color: transparent;
`

export default MovieCarousel