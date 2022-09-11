import React from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = React.useState([])
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
    
    function toggleFavorite(id) {
        const updatedArray = photos.map(photo=>{
            if(photo.id===id){
                return {...photo, isFavorite:!photo.isFavorite}
            }
            else {
                return photo
            }
        })

        setPhotos(updatedArray)
    }
    // toggleFavorite(1)
    return (
        <Context.Provider value={{photos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 