import React from 'react';
import './components.css';
import Badge from "react-bootstrap/Badge";
import { Button } from '@material-ui/core';

function randomArrayIndex() {
    return Math.floor((Math.random() * 6) + 1);
}

export default function hasReadBook({name}) {

    var words = ["awesome", "eye-opening", "well written", "wonderful", "sublime", "interesting", "stupendous"];
    
    return (
        <div className="results"><Button color="primary" variant="outlined"> Yes, Hunter has read {name}. He thought it was {words[randomArrayIndex()]}!</Button></div>
    );
}