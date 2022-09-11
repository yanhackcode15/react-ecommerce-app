import React from "react"
import Image from "../components/Image"
import {Context} from "../Context"


export default function Photos() {
    //havrest id, src and isfavorite from the provider array
    const {photos} = React.useContext(Context)
    console.log('consumer',photos)
    
    return (
            <main className="photos">
                {photos.map((photoObj, index)=><Image key={index} image={photoObj} index={index}/>) }
            </main>
           
    )
}