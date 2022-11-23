import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2M3ZDkwYjJlNjRkMjdlNTBkNDc4MyIsImlkQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjkxMDM1MzksImV4cCI6MTY2OTM2MjczOX0.mNPE78k5repu5yKCba261Tki8G7kBi4jlIe0pr80jcM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
}); 