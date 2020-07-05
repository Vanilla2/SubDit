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
                    <Paper key = {x._id} elevation = {3} style = {{margin:10, padding:15}}>
                        <Typography variant = "h5">
                            {x.title}
                        </Typography>
                        <Typography variant = "subtitle1">
                            {x.author}
                        </Typography>
                        <Typography variant = "h6">
                            {x.description}
                        </Typography>
                    </Paper>
                ))}
            </Container>
        </>
    )
}
