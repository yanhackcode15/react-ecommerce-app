import React from "react"
import getClassName from "../utilities/util"
//<i class="ri-heart-line"></i>
//<i class="ri-heart-fill"></i>
export default function Image({image, index}){
    function heartIcon(fav){
        if (fav) {
            return 'ri-heart-fill'
        }
        else {
            return 'ri-heart-line'
        }
    }
    return (
        <div className={`grid-image ${getClassName(index)}`}>
            <i className={`heart ${heartIcon(image.isFavorite)}`}></i>
            <img className="photo" src={image.url} />
            
        </div>
    )
}