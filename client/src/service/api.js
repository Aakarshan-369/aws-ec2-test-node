import axios from 'axios';

const URL = 'https://34.232.77.184:8443';


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}