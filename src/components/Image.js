import React from "react"
import getClassName from "../utilities/util"
import {Context} from "../../src/Context"
//add to cart will add an item to the cart page
//context provider carted items, update carted items when added to cart icon toggles
//render carteditems on cart page

export default function Image({image, index}){
    const {toggleFavorite, cartedItems, setCartedItems} = React.useContext(Context)
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

    React.useEffect(()=>{
        setCartedItems(prev=>{
            if (addedToCart){
                return [...prev, image]
            }
            else {
                return prev.filter(img=>img.index!==image.index)

            }
        })
    }, [addedToCart])

    console.log('carted items', cartedItems)
    return (
        <div className={`grid-image ${getClassName(index)}`} onMouseOver={hoverOn} onMouseOut={hoverOff}>
            {showFavoriteIcons()}
            {showCartIcons()}
            <img className="photo" src={image.url}/>
            
        </div>
    )
}