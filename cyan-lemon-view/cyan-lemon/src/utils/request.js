import axios from 'axios'
const BASEURL = process.env.NODE_ENV === 'prduction' ? '' : '/'
const request = axios.create({
    baseURL: BASEURL, // 基础路径
    timeout: 5000 // 超时时间
})
/**
 * 请求拦截
*/
request.interceptors.request.use(function(config) {// 请求拦截
    // config.headers['Tokey'] = ''
    console.log(config)
    return config
}, function(err) {
    return Promise.reject(err)
})
request.interceptors.response.use(function(response){
    let data = response.data
    if (data.status !== "200") { // 此处如果 data.status !== "200" 会报错 Uncaught (in promise)
        return Promise.reject(data)
    } else {
        return data
    }
}, function(error){
    return Promise.reject(error)
})
export default request