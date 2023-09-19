/* api req */
import axios from "axios"
import toast from "react-hot-toast";
// import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = process.env.H_and_S_SERVER_DOMAIN;


export async function getallitms() {
    try {
        const { data } = await axios.get('api/getItems')
        return data;
    } catch (error) {
        return Promise.reject({ error: "Error To Finding Data" })
    }
}

export async function adminlogin({ username, password }) {
    const toastId = toast.loading('verifing...');
    try {
        // console.log(username)
        if (username) {
            const { data } = await axios.post('http://localhost:8080/api/adminlogin', { username, password })
            // console.log(data);
            const { token } = data;
            // console.log(token);

            if (!token) {
                toast.error("Wrong Credentials", { id: toastId })
                // console.log('Token is invalid:', token);
                // return;
                return Promise.reject({ error: "Error To Login" })
            }
            localStorage.setItem('token', token);
            toast.success("Login Successfully", { id: toastId })
            // return token;
            // const token = data.token;
            // Navigate('/');
            // console.log(token);
            return Promise.resolve();
        } else {
            toast.error("Wrong Credentials", { id: toastId })
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error("Wrong Credentials", { id: toastId })
        // return;S
        // return Promise.reject({ error: "Error To Login" })
    }
}


export async function updateItems(response) {
    try {

        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateItems', response, { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Update Data...!" })
    }
}
