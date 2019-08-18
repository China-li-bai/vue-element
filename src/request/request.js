import axios from 'axios'
import qs from 'qs';
const server = axios.create({
    timeout: 5000  //ms
})

// 请求前拦截 (请求还没有发出去)
server.interceptors.request.use(config => {
    // console.log(config);
    /**这里的作用是把 login页面的json对象数据{"username":"admin","passWord":"1"} 转为 username=admin&passWord=1"
     * content-type  application/json   转为 form-data
     * */
    if (config.method === 'post' || config.method === 'put'){
        config.data = qs.stringify(config.data,{} )
    }

    return config
}, error => {
    return Promise.reject(error)
})

// 请求返回结果后拦截
server.interceptors.response.use(result => {
    return result.data
}, error => {
    return Promise.reject(error)
})

export default server