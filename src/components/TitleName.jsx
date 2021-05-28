import React from "react";
import "./components.css";
import { Badge } from "react-bootstrap";
import { Button } from "@material-ui/core";

export default function TitleName() {
    return (
        <div>
            <div class="box">
                <h3 className="Title-name" variant="outlined" color="link"> Has Hunter Read that Book?</h3>
                </div>
            <hr className="Horizontal-line-style"></hr>
            <hr className="Vertical-line-style"></hr>
            <hr className="third-line-style"></hr>

        </div>

    ); 
}