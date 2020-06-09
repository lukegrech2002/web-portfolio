// This is to darken the rest of the page taht is visible when opening the side menu
import React from 'react';
import './BackDrop.css'

const BackDrop = props => (
    <div className="back-drop" onClick={props.click}></div>
);

export default BackDrop