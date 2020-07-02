import React from 'react';
import "../style/index.css";
import { Router, Link } from "@reach/router"
import Home from "./Home";
import Topic from "./Topic";
import Add from "./Add";

const Empty = ({ children }) => {
    return children;
}

const Index = () => {
    return(
        <Router>
            <Empty path = "/SubDit">
                <Home path = "/"/>
                <Topic path = "/topics/:title"/>
                <Add path = "/add"/>
            </Empty>
        </Router>
    )
}
export default Index;