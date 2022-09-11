import React from "react"
import getClassName from "../utilities/util"
import {Context} from "../../src/Context"
//icon hover

export default function Image({image, index}){
    const {toggleFavorite} = React.useContext(Context)
    const [addedToCart, setAddedToCart] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
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
        setIsHovered(true)
    }

    function hoverOff(){
        setIsHovered(false)
    }

    function showFavoriteIcons(){
        if (isHovered || image.isFavorite ){
            return (<i className={`heart ri-heart-${toggleIcon(image.isFavorite)}`} 
                    onClick={()=>toggleFavorite(image.id)}></i>)
        }

    }
    function showCartIcons(){
        if (isHovered || addedToCart){
            return (<i className={`cart ri-shopping-cart-${toggleIcon(addedToCart)}`} 
                onClick={()=>toggleAddToCart()}></i>)
        }
    }

    return (
        <div className={`grid-image ${getClassName(index)}`} onMouseOver={hoverOn} onMouseOut={hoverOff}>
            {showFavoriteIcons()}
            {showCartIcons()}
            <img className="photo" src={image.url}/>
            
        </div>
    )
}