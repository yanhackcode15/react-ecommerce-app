import React from "react"
import {Context} from "../Context"
{/* <i class="ri-delete-bin-line"></i> */}

export default function Cart() {
    const {cartedItems} = React.useContext(Context)
    function displayCartedItems () {
        return cartedItems.map(item=>(
            <div className="thumbnail-container" key={item.id}>
                <i class="ri-delete-bin-line"></i>
                <img className="thumbnail" src={item.url}/>
                <div>Price: $7</div>
            </div>
        ))
    }
    return (
        <div>
            {displayCartedItems()}
            
        </div>
    )
}