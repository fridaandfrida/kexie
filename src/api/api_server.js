import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.103:8383',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1ODUyODg0NDQsInN1YiI6ImFkbWluIiwiY3JlYXRlZCI6MTU1MzY2NjA0NDEzMH0.E-q-yALWQPRx4ApxM7gjmpmbG0c8P98l5o2L5SDZRRR0fogD_WgOp5tvkMQDYsPzgJ5kWijnyMhG6syI5ZcqGg',
    'Content-Type': 'application/json'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
//   getTestData: (data) => instance.get('/business/user/find', {params: data}),// 获取
//   addTestData: (data) => instance.post('/business/user/add', {}, {params: data}),// 添加
//   upTestData: (data) => instance.post('/business/user/update', {}, {params: data}),// 修改
//   getTestDataDetail: (data) => instance.get('/business/user/detail', {params: data}),// 查看
//   delTestData: (data) => instance.delete('/business/user/deleted', {params: data})// 删除
getTestData: (data) => instance.post('/back/question/listQuestion', {}, {params: data}),//获取题库
getTestDataDetail: (data) => instance.post('/back/question/detailQuestion',{}, {params: data}),
getTestData3: (data) => instance.post('/back/question/listQuestion', {params: data}),
// getTestData4: (data) => instance.get('/back/question/analyzeExcel', {params: data}),
//用户管理
getUserData: (data) => instance.post('/back/user/queryUser', {}, {params: data}),//获取用户
getUserDataDetail: (data) => instance.post('/back/user/queryUserIntegral', {}, {params: data}),//查看用户详情
};