import axios from 'axios'
const request = axios.request
export function uplaodPhoto(data) {
    return request({
        url: 'http://localhost:3000/upload',
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data,
    })
}