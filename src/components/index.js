import React from 'react';
import "../style/index.css";
import { Router, Link } from "@reach/router"
import Home from "./Home";
import Topic from "./Topic";
import AddTopic from "./AddTopic";
import AddPost from "./AddPost";

const Empty = ({ children }) => {
    return children;
}

const Index = () => {
    return(
        <Router>
            <Empty path = "/SubDit">
                <Home path = "/"/>
                <Topic path = "/topics/:title"/>
                <AddTopic path = "/addtopic"/>
                <AddPost path = "/addpost/:topic"/>
                <Home default />
            </Empty>
        </Router>
    )
}
export default Index;