import axios from "axios";

import {LOCAL_STORAGE_USER_KEY} from "../common/config/localStorage";

export const $unAuthHost = axios.create({
    baseURL: process.env.REACT_APP_API_V1_URL,
});

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_V1_URL,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
    }
});

export default $host;