import axios from 'axios'

export const commonAPI = async (httpMethod, url, reqBody) => { //this the api configuration for this project 
    
    let reqConfig = {
        method: httpMethod,
        url,
        headers: {
            "Content-Type":"application/json",
        },
        data:reqBody
    }
    return await axios(reqConfig).then(resq => {
        return resq
    }).catch(err => {
        return err
    })
}