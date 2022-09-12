import React from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

export default function Cart() {
    const {cartedItems, setCartedItems} = React.useContext(Context)
    
    function placeOrder() {
        setCartedItems([])
    }


    function displayOrderStatus(){
        return null
    }
    return (
        <main className="cartPage">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cartedItems.map(item=>(<CartItem item={item} />
        ))}
            </div>
            <h2>{`Total: $${7*cartedItems.length}`}</h2>
            {cartedItems.length?<button className="order-button" onClick={placeOrder}>Place Order</button>: <h2>Add something to the cart...</h2>}
        </main>
    )
}