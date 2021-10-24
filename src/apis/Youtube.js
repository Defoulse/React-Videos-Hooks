import axios from 'axios';

const KEY = 'AIzaSyCCBEmLOYsRMCNSijht0Q2K_PDXDhLm78E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});