import React from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = React.useState([])
    const [cartedItems, setCartedItems] = React.useState([])

    React.useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then((response)=>{
            if (response.ok){
                return response.json()
            }
            else {
                throw response
            }})
        .then(data=>{
            setPhotos(data)
        })
        .catch(error=>console.error("error fetching", error))
    },[])
    
    function toggleFavorite(image) {
        const updatedArray = photos.map(photo=>{
            if(photo.id===image.id){
                return {...photo, isFavorite:!photo.isFavorite}
            }
            else {
                return photo
            }
        })

        setPhotos(updatedArray)
    }
    function addToCart(image){
        setCartedItems(prev=>{
            return [...prev, image] 
        })
    }
    function removeFromCart(image){
        setCartedItems(prev=>{
            return prev.filter(item=>image.id!==item.id)
        })
    }
   
    return (
        <Context.Provider value={{photos, toggleFavorite, cartedItems, setCartedItems, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 