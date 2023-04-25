import { useState } from 'react';

function ColorButton() {

    const [colorClassName, setColorClassName] = useState('btn-primary');
    const [label, setLabel] = useState('Blue');

    function changeColor() {

        // If the button is blue
        if( colorClassName === "btn-primary" ) {

            // Make it red
            setColorClassName('btn-danger');
            setLabel("Red");
        }
        // Otherwise, if the button is red
        else if( colorClassName === 'btn-danger' ) {

            // Make it blue
            setColorClassName('btn-primary');
            setLabel("Blue")
        }
    }

    return (
        <button 
        onClick={changeColor}
        className={`btn ${colorClassName}`}>
           {label}
        </button>
    )

}

export default ColorButton;