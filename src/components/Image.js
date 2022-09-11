import React from "react"
import getClassName from "../utilities/util"
import {Context} from "../../src/Context"
//icon hover

export default function Image({image, index}){
    const {toggleFavorite} = React.useContext(Context)
    const [addedToCart, setAddedToCart] = React.useState(false)
    const [hover, setHover] = React.useState(false)
    function toggleIcon(fav){
        if (fav) {
            return 'fill'
        }
        else {
            return 'line'
        }
    }

    function toggleAddToCart(){
        setAddedToCart(prev=>!prev)
    }
    
    function hoverOn(){
        setHover(true)
    }

    function hoverOff(){
        setHover(false)
    }


    return (
        <div className={`grid-image ${getClassName(index)}`}>
            {hover&&<i 
            className={`heart ri-heart-${toggleIcon(image.isFavorite)}`} 
            onClick={()=>toggleFavorite(image.id)}
            >
            </i>}
            {hover&&<i 
            className={`cart ri-shopping-cart-${toggleIcon(addedToCart)}`} 
            onClick={()=>toggleAddToCart()} 
            >
            </i>}
            
            <img className="photo" src={image.url} onMouseOver={hoverOn} onMouseOut={hoverOff}/>
            
        </div>
    )
}