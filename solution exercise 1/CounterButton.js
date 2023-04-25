import { useState } from 'react';

function CounterButton() {
    const [label, setLabel] = useState(0)

    function changeLabel() {
        setLabel(1)
    }

    return (
        <button 
        onClick={changeLabel}
        className="btn btn-primary">
            {label}
        </button>
    )

}

export default CounterButton;