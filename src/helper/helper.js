/* api req */
import axios from "axios"

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
    try {
        if (username) {
            const { data } = await axios.get('api/adminlogin', { username, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error: "Error To Login" })
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

