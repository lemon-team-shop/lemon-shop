import request from '../../../utils/request'
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data,
    })
}
export function upload(data) {
    return request({
        url: '/upload',
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data,
    })
}