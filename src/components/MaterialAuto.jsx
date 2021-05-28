import React, {useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import books from '../LotsofBooks.jsx';
import Results from './Results.jsx';
import './components.css';

//need to hide results on clear!

export default function MaterialAuto() {

    const [currentValue, setCurrentValue] = useState('')
    const [showResults, setShowResults] = useState(false)

    const handleSelect = (e, value) => {
        //console.log("selection", value); 
        setCurrentValue(value);
        setShowResults(true); 
    }
    
    return (
        <div>
            <Autocomplete style={{ width: 500 }}
            className="search-box"
                freeSolo
            options={books}
            onChange={handleSelect}
            renderInput={(params) => (<TextField{...params} variant="outlined" label="Search Here" margin="normal" />)} />
            {showResults ? <Results name={currentValue} /> : null}
        </div>
    ); 
}
