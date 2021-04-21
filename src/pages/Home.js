import React from 'react'
import UnsplashApi from '../components/api/UnsplashPhotoApi'
import ColorThemeBtn from '../components/buttons/ColorThemeBtn'

function Home() {

    return(
        <div className="container mx-auto p-4">
            <h1 className="p-4">Hello World</h1>
            <ColorThemeBtn /> 
            <UnsplashApi /> 
        </div>
    )
}

export default Home 