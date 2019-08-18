import request from './request'
const preUrl = process.env.NODE_ENV === 'development' ? '/handsome' : '';
// npm run serve => development  preUrl = '/api/coding'
// npm run build => production   preUrl = ''
console.log(process.env.NODE_ENV);
// 上线urlhttp://192.168.113.117:8080/tokens
// 生产环境上url是没有/api/coding
// 登录接口
export const LoginApi = (params) => request.post(`${preUrl}/tokens`, params);
// 部门管理列表
// localhots:8080/api/coding/departments?token=xxx&currentPage=1&pageSize=10
export const getDepartments = (params) => request.get(`${preUrl}/departments`, {params: params});

/**修改部门管理信息*/
export const editDepartments = (params) => request.put(`${preUrl}/departments/${params.id}`, params);