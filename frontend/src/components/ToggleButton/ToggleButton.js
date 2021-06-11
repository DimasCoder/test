import React from 'react';
import './ToggleButton.css'

const ToggleButton = props => {
    let toggleClasses = 'toggle-button__line';

    if(props.toggle){
        toggleClasses = 'toggle-button__line open'
    }
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className={toggleClasses}></div>
            <div className={toggleClasses}></div>
            <div className={toggleClasses}></div>
        </button>
    )
}

export default ToggleButton;