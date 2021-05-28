import React from "react";
import "./components.css";
import { Button } from "@material-ui/core"; 

export default function Footer() {
    return (
        <div className="footer">
            <Button className="footer-text" variant="outlined" color="link"> github </Button>
        </div>

    ); 
}