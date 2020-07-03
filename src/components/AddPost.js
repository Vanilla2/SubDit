import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import {styled} from "@material-ui/core/styles";
import {CircularProgress, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import api from "../other/api";
import {useNavigate} from "@reach/router";
const Custom = styled(TextField)({
    borderRadius: "4px",
    backgroundColor: "rgb(255,255,255)",
});

const style = {
    Element: {
        width: "100%",
        marginBottom: "15px"
    },
    Container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}


export default (props) =>{
    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [description,setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const Submit = () => {
        setLoading(true);
        const obj = {
            title:title,
            author:author,
            description: description
        }
        api.addPost(props.topic, obj).then(x =>{
            setLoading(false);
            navigate("/SubDit/topics/" + props.topic)
        })
    }
    return(
        <Container maxWidth="sm" style = {style.Container}>
            <Typography variant="h5" style = {{marginBottom: 15}}>
                You are adding a post to the topic: {props.topic}
            </Typography>
            <Custom color = {"primary"} onChange = {event => setTitle(event.target.value)} value = {title} style ={style.Element} id="outlined-basic" label="Title" variant="filled" />
            <Custom color = {"primary"} onChange = {event => setAuthor(event.target.value)} value = {author} style ={style.Element} id="outlined-basic" label="Author" variant="filled" />
            <Custom color = {"primary"} multiline rows = {5} onChange = {event => setDescription(event.target.value)} value = {description} style ={style.Element} id="outlined-basic" label="Body" variant = "filled"/>
            {loading ?
                <CircularProgress style ={{zIndex: "100", marginTop: "10px"}}/> :
                <Button onClick={Submit} style={style.Element} variant="contained" color="primary">
                    Submit
                </Button>}
        </Container>
    )
}