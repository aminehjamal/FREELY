import { useState } from 'react';

function ColorButton() {


    const [colorClassName, setColorClassName] = useState('btn-primary');

    function changeColor() {
        setColorClassName('btn-danger');
    }

    return (
        <button 
        onClick={changeColor}
        className={`btn ${colorClassName}`}>
            Click
        </button>
    )

}

export default ColorButton;