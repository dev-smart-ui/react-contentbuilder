import axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: 'https://builder.smart-ui.pro/'
});

