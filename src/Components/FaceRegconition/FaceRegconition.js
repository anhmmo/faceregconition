import React from 'react'
import './FaceRegconition.css';

function FaceRegconition({imageUrl, box}) {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputImage' src={imageUrl} alt="" />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRegconition
