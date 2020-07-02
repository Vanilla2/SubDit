const getTopics = async () =>{
    let URL = "https://vanilla2431.herokuapp.com/topics";
    try{
        let res = await fetch(URL);
        let data = await res.json();
        return data;
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

const api = {
    getTopics: getTopics,
    addTopic: addTopic
}
export default api;
