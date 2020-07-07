import React, {useEffect, useState} from 'react'
import {Container, Typography, List, ListItem, Grid, Paper} from "@material-ui/core";
import {Link} from "react-router-dom"
import Top from "./Top";
import api from "../other/api";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    Grid_item: {
        padding:15,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection:"column",
            alignItems: "center"
        }
    }
}));

export default () => {
    const classes = useStyles();
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        api.getTopics().then((data) =>{
            setTopics(data);
        })
    }, []);
    return(
        <>
            <Top button = "Add A Topic" link = "/addtopic"/>
            <Container maxWidth="md">
                <Paper style = {{padding: "10px", margin: "10px"}} elevation = {3}>
                    <Typography style = {{textAlign: "center", margin: "20px"}} variant="h3">
                        Welcome to SubDit
                    </Typography>
                    <Grid container>
                        <Grid item xs = {12} md = {6} className={classes.Grid_item}>
                            <Typography variant = "h5">
                                Explore the Topics:
                            </Typography>
                            <List>
                                {topics.map((x, index) => (
                                    <Link style = {{textDecoration: "none", color: "black"}} key = {x._id} to = {"/topics/" + x.title}>
                                        <ListItem button style = {{display: "flex", flexDirection: "column", alignItems: "unset"}}>
                                            <Typography variant="h6">
                                                {index+1}. {x.title}
                                            </Typography>
                                            <Typography variant = "subtitle1">
                                                {x.description}
                                            </Typography>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs = {12} md = {6} className={classes.Grid_item}>
                            <Typography style ={{marginBottom: "5px"}} variant = "h5">
                                About this Site:
                            </Typography>
                            <Typography style ={{fontWeight: 500}} variant = "h5">
                                If you are here to test this magnificent piece of garbage, then HI!
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}