import React, {useEffect, useState} from 'react'
import {Container, Button, Typography, List, ListItemText, ListItem, Grid, Paper} from "@material-ui/core";
import {Link} from "@reach/router";
import Top from "./Top";
import api from "../other/api";

export default () => {
    const [topics, setTopics] = useState([]);
    console.log(topics);
    useEffect(() => {
        api.getTopics().then((data) =>{
            setTopics(data);
        })
    }, []);
    return(
        <>
            <Top/>
            <Container maxWidth="md">
                <Typography style = {{textAlign: "center", margin: "20px"}} variant="h3">
                    Welcome to my swamp
                </Typography>
                <Grid container>
                    <Grid item xs = {6}>
                        <Paper style = {{padding: "10px", margin: "10px"}} elevation = {3}>
                            <Typography variant = "h5">
                                Explore the Topics:
                            </Typography>
                            <List>
                                {topics.map((x, index) => (
                                    <Link style = {{textDecoration: "none", color: "black"}} key = {x._id} to = {"/subdit/topics/" + x.title}>
                                        <ListItem button>
                                            <Typography variant="h6">
                                                {index+1}. {x.title}
                                            </Typography>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs = {6}>
                        <Paper style = {{padding: "10px", margin: "10px"}} elevation={3}>
                            <Typography style ={{marginBottom: "5px"}} variant = "h5">
                                About this Site:
                            </Typography>
                            <Typography style ={{fontWeight: 500}}variant = "h5">
                                If you are here to test this magnificent piece of garbage, then HI!
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}