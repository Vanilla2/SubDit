import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles} from "@material-ui/core";
import {Link} from "@reach/router";


export default ({button, link}) => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Link style = {{textDecoration: "none", color: "white", flexGrow: 1}} to = "/SubDit">
                    <Typography variant="h4">
                        SubDit
                    </Typography>
                </Link>
                <Link style ={{textDecoration: "none", color: "inherit"}} to = {link}>
                    <Button color="inherit">{button}</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}