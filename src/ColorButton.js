import { useState } from 'react'

function ColorButton() {

    const [colorClassName, setColorClassName] = useState('btn-primary');
    const [label, setLabel] = useState('Blue')

    function changeColor() {
            if (colorClassName == 'btn-primary') {
            setColorClassName('btn-danger');
            setLabel('Red');
            }
            else if (colorClassName == 'btn-danger') {
                setColorClassName('btn-primary');
                setLabel('Blue')
            }

        
    }

    return(
        <button
        onClick={changeColor}
        className={`btn ${colorClassName}`}>
            {label}
            </button>    
    )
   
}

export default ColorButton;