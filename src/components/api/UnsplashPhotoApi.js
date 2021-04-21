import React, {useState, useEffect} from 'react'
// import {REACT_APP_UNSPLASH_KEY} from '../../config/plugins'

function UnsplashAPI() {
    let [photoUrl, setPhotoUrl] = useState('');
    // let [query, setQuery] = useState("vampires");
    // const queryInput = useRef(null);
    
    /* eslint-disable */

    {/*
        * This api link works for Vanilla JS 
        but not React? 
        https://api.unsplash.com/photos/WkfDrhxDMC8?client_id=
    */}

    const url = "https://api.unsplash.com/photos/VzJjPuk53sk?client_id=drJmA_f2aSBk3wyiZ_vvM-rYJd27WLku0D1gUrhrPVk" 
    const loadData = () => {
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            setPhotoUrl(data.urls.full)
        }) 
    }
    console.log("loaded data")

    useEffect(() => {
        loadData()
    });

    /* eslint-disable */

    {/*
    useEffect((e) => {
        e.loadData( {
            url: photosUrl,
            onSuccess: res => {
                setPhotos(res);
            }
        });
    }, [query, url]);
    */}

    /* eslint-disable */

    {/* 
        const searchPhotos = e => {
            e.preventDefault();
            setQuery(queryInput.current.value);
        };
    */}

    return(
        <div className="image">
            <img  src={photoUrl} alt="" /> 
        </div>
    )
}

export default UnsplashAPI 