import axios from 'axios';



const KEY = 'AIzaSyB-SuSE6Iu_DBRxD9qvTGSqJoDjYicTgX0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
