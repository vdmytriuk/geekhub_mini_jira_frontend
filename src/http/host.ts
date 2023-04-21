import axios from "axios";

import {LOCAL_STORAGE_USER_KEY} from "../common/config/localStorage";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_V1_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_USER_KEY)}`,
    }
});

export default $host;