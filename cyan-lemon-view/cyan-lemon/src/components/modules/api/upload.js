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
export function product(data) {
    return request({
        url: '/product',
        method: 'post',
        data,
    })
}
export function search(data) {
    return request({
        url: '/search',
        method: 'post',
        data,
    })
}
export function fuzzySearch(data) {
    return request({
        url: '/fuzzySearch',
        method: 'post',
        data,
    })
}
