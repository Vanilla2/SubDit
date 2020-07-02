import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles} from "@material-ui/core";
import {Link} from "@reach/router";


export default () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography style = {{flexGrow: 1}} variant="h4">
                    SubDit
                </Typography>
                <Link style ={{textDecoration: "none", color: "inherit"}} to ="/SubDit/add">
                    <Button color="inherit">Add a Topic</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}