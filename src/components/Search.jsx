import React from "react";
import { useState } from "react";






function Search ({onSearch}){

    const [city , setCity] = useState('')
    const handleChang = (event)=>{
        setCity(event.target.value);
    };

    const handleSubmit = () =>{
        if(city.trim() !== ""){
            onSearch(city)
        }
    }

    return(
        <div>
            <input type="text"
            placeholder="City name"
            value={city}
            onChange={handleChang}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Search;