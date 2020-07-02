const validateAddTopic = (topic) => {
    if (topic.title.length <= 30 && topic.description.length <= 90){
        return true;
    }
    return false;
}

const utils = {
    validateAddTopic: validateAddTopic
}

export default utils;