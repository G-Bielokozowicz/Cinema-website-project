import React from 'react'
import { useParams } from 'react-router-dom';

function Searched() {

    let params=useParams();

    return (
        <div>Searched: {params.search}</div>
    )
}

export default Searched