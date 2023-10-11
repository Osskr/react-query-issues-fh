import axios from "axios";
 
export const githubApi = axios.create({
    baseURL:'http://api.github.com/repos/facebook/react',//url constante para cualquier peticion
    // headers:{
    //     Authorization: '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'
    // },
})