import React from 'react';
import './components.css';
import Badge from "react-bootstrap/Badge";
import { Button } from '@material-ui/core';

export default function HasNotReadBook({name}) {
    return (
        <div className="results"><Button variant="outlined" color="secondary"> No, Hunter has not read {name}. Should he add it to the list?</Button>{''}</div>
    );
}