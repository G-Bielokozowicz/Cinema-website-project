import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import styled from 'styled-components'

// tu będzie trzeba z bazy danych brać plakaty

function MovieCarousel() {


    return (
        <Wrapper>
            <Splide options = {{
                perPage: 4,
                arrows: false,
                pagination: false,
                }}>
                
                {(() => {
                    let test = [];
                    for (let i = 0; i <= 10; i++) {
                        test.push(<SplideSlide>
                                    <FillerPoster color={i}/>
                                </SplideSlide>);
                    }
                    return test;
                })()}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    width: 1600px;
    max-width: 40%;
    outline: 1px groove #D34D18;
`

const FillerPoster = styled.div`
    width: 200px;
    height: 300px;
    //background-color: #dbdada;
    background-color: ${props=>(props.color%2===1 ? '#271f6d' : 'purple')};
    //margin-right: 15px;
    display: block;
    color: transparent;
`

export default MovieCarousel