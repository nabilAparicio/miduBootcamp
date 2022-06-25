import React, { useState } from 'react'
import './App.css'

function App() {
    const [gifs, setGifs] = useState(['https://media4.giphy.com/media/IgpAALi5hEv1IFmCrZ/giphy.gif?cid=ecf05e476c4i1ydvzc07uonjvzocwmmhhnb4y6cvc9jdlv2i&rid=giphy.gif&ct=g'])
    const diferentGif = ['https://media3.giphy.com/media/Qs0QEnugOy0xIsFkpD/200w.webp?cid=ecf05e473rh5gql85pg8pseprn8khkfhz9a3t9j2y819qtwp&rid=200w.webp&ct=g']
    return (
        <div className="App">
            <header className="App-content">
                <p>hola mundo</p>
                {
                    gifs.map(singleGif => <img key='asdf' src={singleGif}></img>)
                }
                <button onClick={() => setGifs(diferentGif)}>Hola soy un boton</button>
            </header >
        </div >
    )
}

export default App
