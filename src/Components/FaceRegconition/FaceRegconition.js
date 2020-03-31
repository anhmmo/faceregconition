import React from 'react'
import './FaceRegconition.css';

function FaceRegconition({imageUrl}) {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}

export default FaceRegconition
