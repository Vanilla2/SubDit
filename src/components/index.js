import React from 'react';
import "../style/index.css";
// import { Router, Link } from "@reach/router"
// import {
//     createMemorySource,
//     createHistory,
//     LocationProvider
// } from "@reach/router"
import {
    HashRouter as Router,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Topic from "./Topic";
import AddTopic from "./AddTopic";
import AddPost from "./AddPost";

const Index = () => {
    return(
        <Router>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/addtopic" component = {AddTopic}/>
            <Route path = "/topics/:title" component = {Topic}/>
            <Route path = "/addpost/:topic" component = {AddPost}/>
        </Router>
    )
}
export default Index;