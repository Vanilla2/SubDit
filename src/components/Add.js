import React, {useEffect, useState} from 'react';
import {useNavigate, Link } from "@reach/router";
import {TextField, Button, createMuiTheme, ThemeProvider, Typography, CircularProgress, Snackbar} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import '../wave.css';
import api from "../other/api"
import utils from "../other/utils";
const Custom = styled(TextField)({
    borderRadius: "4px",
    backgroundColor: "rgb(255,255,255)",
});

const style = {
    Box:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    Box2:{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    Element: {
        zIndex: "1000",
        width: "100%",
        marginBottom: "15px"
    },
    Brand:{
        position: "absolute",
        top: "23%",
        zIndex: "1000",
        textAlign: "center",
        color: "white"
    }

}


const Login = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [localSubmited, setLocalSubmited] = useState(false);

    const Submit = () =>{
        setLoading(true);
        const data = {
            title: title,
            description: description
        }
        if (utils.validateAddTopic(data) === true) {
            api.addTopic(data).then(x => {
                setLocalSubmited(true);
                navigate("/SubDit");
            })
        }
        else{
            alert("Title or Description length are too long.\nConstraints:\nTitle <= 30 characters\nDescription <= 90 characters\nYour title: " + title.length + " characters\nYour Description: " + description.length + " characters")
            setLoading(false);
        }
    }
    const handleKey = (e) => {
        if (e.keyCode === 13){
            Submit();
        }
    }
    useEffect(() =>{
        document.addEventListener("keyup", handleKey);
        return(() =>{
            document.removeEventListener("keyup", handleKey);
        });
    });
    return(
        <>
            <Link to ="/" style ={{textDecoration: "none", color: "White", position: "absolute", left: "15", top: "15", zIndex: "10000"}}>
                <Typography style = {{margin:"15px"}} variant = "h5">
                    Back to Home
                </Typography>
            </Link>
            <div style = {{backgroundColor: "#27273C"}}className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png'"}}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png'"}}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png'"}}/>
                </div>
            </div>
            <Box style = {style.Box} maxWidth = "xs">
                <Typography style = {style.Brand} variant = "h2">Add A Topic</Typography>
                <Box style = {style.Box2}>
                    <Custom onChange = {event => setTitle(event.target.value)} value = {title} style ={style.Element} id="outlined-basic" label="Title" variant="filled" />
                    <Custom multiline rows = {3} onChange = {event => setDescription(event.target.value)} value = {description} style ={style.Element} id="outlined-basic" label="Description" variant="filled" />
                    {loading ?
                        <CircularProgress style ={{zIndex: "100", marginTop: "10px"}}/> :
                        <Button onClick={Submit} style={style.Element} variant="contained" color="primary">
                            Submit
                        </Button>}
                </Box>
            </Box>
        </>
    )
}

export default Login;