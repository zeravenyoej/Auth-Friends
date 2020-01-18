import axios from 'axios'

//I'm going to get the token in more than one place - including below - so this is a shortcut
export const getToken = () =>{
    return localStorage.getItem('token')
}

//This is an axios helper with some predefined values
const api = () => {
    return axios.create({
        baseURL: '',
        headers: {
            Authorization: getToken(),
        }
    })
};

export default api;