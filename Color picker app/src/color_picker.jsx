import React, { useState } from 'react';

function Color_picker(){

    const [color, setColor] = useState("#FFFFFF");

    const handleTrigerColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <p className='color-picker-text' style={{backgroundColor:color}}>Selected color: {color}</p>
            <label>Select a color: </label>
            <input type="color" value = {color} onChange={handleTrigerColorChange}>
            </input>
        
        </div>
    )
}

export default Color_picker;