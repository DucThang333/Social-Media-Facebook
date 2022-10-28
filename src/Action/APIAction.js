import axios from "axios"
const getAllAccount = async () => {
    let data 
    await axios.get('http://localhost:5000/api/v1/getAllAccount')
        .then(res => {
            data = res.data
        }).catch(error => {
            console.log('error-getAPI-allAccount', error)
        })
    return data
} 

export {getAllAccount}