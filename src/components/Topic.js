import React, {useEffect, useState} from 'react';
import {Container, Paper, Typography} from "@material-ui/core";
import api from "../other/api";
import Top from "./Top";

export default (props) => {
    const [title] = useState(props.match.params.title);
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        api.getTopicInfo(title).then(x => {
            setDescription(x.description);
        });
        api.getTopicPosts(title).then(x => {
            setPosts(x);
        })
    }, [title])
    return(
        <>
            <Top button = "Add A Post" link = {"/addpost/" + title}/>
            <Container style ={{padding: 20}} maxWidth="md">
                <Typography variant = "h4">
                    Topic: {title}
                </Typography>
                <Typography variant = "h5">
                    Topic description: {description}
                </Typography>
                <Typography variant = "h4">
                    Posts:
                </Typography>
                {posts.map(x => (
                    <div key = {x._id} style = {{margin:10, border: "1px solid gray", borderRadius: "5px"}}>
                        <div style = {{padding: 10}}>
                            <Typography variant = "h5">
                                {x.title}
                            </Typography>
                            <Typography variant = "subtitle1">
                                {x.author}
                            </Typography>
                        </div>
                        <div className="container" >
                            <div className="image-wrapper" style ={{position: "relative", paddingBottom: "56.2%"}}>
                                <img src={x.image} alt="Not found" style = {{position: "absolute", objectFit: "cover", width: "100%", height: "100%"}} />
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}
