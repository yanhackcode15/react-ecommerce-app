import React from "react"
import {Context} from "../Context"
{/* <i class="ri-delete-bin-line"></i> */}

export default function Cart() {
    const {cartedItems} = React.useContext(Context)
    function displayCartedItems () {
        return cartedItems.map(item=>(
            <div className="row" key={item.id}>
                <i className="ri-delete-bin-line"></i>
                <img className="thumbnail" src={item.url}/>
                <p>$7</p>
            </div>
        ))
    }
    return (
        <main className="cartPage">
            <h1>Checkout</h1>
            <div className="cart-items">
                {displayCartedItems()}
            </div>
            <h2>{`Total: $${7*cartedItems.length}`}</h2>
        </main>
    )
}