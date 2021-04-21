import React from 'react'
import './color-theme-btn.css'

function ColorThemeBtn() {

    const themeItems = ["Solar Theme", "Brand Theme", "Dark Theme"]
    document.getElementsByClassName("color-theme-list").appendChild("li").classList.add("color-theme-item")
    themeItems = document.getElementsByClassName("color-theme-item") 

    const brandTheme = document.body.style.background = "red"
    const solarTheme 
    const darkTheme 
    function colorTheme() {
        if ( solarTheme ) {
            document.body.style.background = "orange"
        } else if ( darkTheme ) {
            document.body.style.background = "darkred"
        } else  {
            brandTheme
        }
    }

    function toggleThemeBtn(open) {
       const open = true
         
    }

    return(
        <div>
            <button
                id="colorThemeBtn"
                className="color-theme-btn"
                {/* onClick={toggleThemeBtn} */}
                >
            </button>
            <ul className="color-theme-list">{themeItems}</ul>
        </div>
    )
}

export default ColorThemeBtn 