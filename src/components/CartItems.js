import React from "react"
import {Context} from "../../src/Context"

export default function CartItems(item) {
    return (
        <div className="row" key={item.id}>
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item.id)}></i>
            <img className="thumbnail" src={item.url}/>
            <p>$7</p>
        </div>
    )
}