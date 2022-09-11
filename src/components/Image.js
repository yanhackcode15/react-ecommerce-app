import React from "react"
import getClassName from "../utilities/util"
import {Context} from "../../src/Context"
//<i class="ri-heart-line"></i>
//<i class="ri-heart-fill"></i>
//<i class="ri-shopping-cart-line"></i>
//<i class="ri-shopping-cart-fill"></i>

export default function Image({image, index}){
    const {toggleFavorite} = React.useContext(Context)
    const [addedToCart, setAddedToCart] = React.useState(false)
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



    return (
        <div className={`grid-image ${getClassName(index)}`}>
            <i className={`heart ri-heart-${toggleIcon(image.isFavorite)}`} onClick={()=>toggleFavorite(image.id)} ></i>
            <i className={`cart ri-shopping-cart-${toggleIcon(addedToCart)}`} onClick={()=>toggleAddToCart()} ></i>
            <img className="photo" src={image.url} />
            
        </div>
    )
}