import React, { useState } from "react";
import './components.css';
import books from "./books.js";
import HasReadBook from './HasReadBook.jsx';
import HasNotReadBook from "./HasNotReadBook.jsx";
import NoBook from "./NoBook";

//this is the child of MaterialAuto. Needs to get the Data of the selection, compare to array, then return yes/no. 

function findBook(name) {
    for (var i = 0; i < books.length; i++) {
        if (books[i] === name) {
            console.log(books[i]);
            return true; 
        } 
    }   
}

export default function Results({ name }) {

    if (name == null) {
        return (<NoBook />)
    }

    if (findBook(name)){
        return (<HasReadBook name={name}/>);
   } else {
        return (<HasNotReadBook name={name}/>);
   }
}

