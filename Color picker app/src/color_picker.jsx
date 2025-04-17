import React, { useState } from 'react';

function color_picker(){
    const [color_picker, setColor] = useState("#FFFFFF");

    const handleTrigerColorChange = (event) => {
        setColor(event.target.value);
    }
    
    return (
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <p className='color-picker-text'>Selected color: {color}</p>
            <input type="color" value = {color} onChange={handleTrigerColorChange} />
        
        </div>
    )
}