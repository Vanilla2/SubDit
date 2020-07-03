const getTopics = async () =>{
    let URL = "https://vanilla2431.herokuapp.com/topics";
    try{
        let res = await fetch(URL);
        return res.json();
    }
    catch(e){
        console.error(e);
    }
}
const addTopic = async (data) => {
    let URL = "https://vanilla2431.herokuapp.com/topics";
    try{
        let res = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    catch (e) {
        console.error(e);
    }
}
const getTopicInfo = async (topic) => {
    let URL = `https://vanilla2431.herokuapp.com/topics/${topic}`
    try{
        let res = await fetch(URL);
        return res.json();
    }
    catch(e){
        console.error(e);
    }
}
const getTopicPosts = async (topic) => {
    let URL = `https://vanilla2431.herokuapp.com/posts/${topic}`
    try{
        let res = await fetch(URL);
        return res.json();
    }
    catch (e) {
        console.error(e);
    }
}
const addPost = async (topic, data) =>{
    let URL = `https://vanilla2431.herokuapp.com/posts/${topic}`;
    try{
        let res = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    catch (e) {
        console.error(e);
    }
}

const api = {
    getTopics,
    addTopic,
    getTopicInfo,
    getTopicPosts,
    addPost
}
export default api;
