import axios from "axios";
import { ElNotification } from 'element-plus'
const service = axios.create({
  // baseURL: process.env.VUE_ABLUM_BASE_RUL,
  timeout: 12000,
});
// 2.请求拦截器
service.interceptors.request.use(
  (config) => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    config.headers = {
      "Content-Type": "application/json", //配置请求头
    };
    // const token = sessionStorage.getItem("access_token");
    // if (token) {
    //   // config.params = { token: token }; //如果要求携带在参数中
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// 3.响应拦截器
service.interceptors.response.use(
  (response) => {
    // ElNotification({
    //   title: '错误',
    //   message: response.resultMessage,
    //   type: 'error',
    // })
    // if (response.status !== 200) {
    //   switch (response.status) {
    //     case 400:
    //       ElNotification({
    //         title: '错误',
    //         message: response.resultMessage,
    //         type: 'error',
    //       })
    //       break;
    //     case 401:
    //       ElNotification({
    //         title: '错误',
    //         message: "未授权，请重新登录",
    //         type: 'error',
    //       })
    //       break;
    //     case 403:
    //       ElNotification({
    //         title: '错误',
    //         message: "拒绝访问",
    //         type: 'error',
    //       })
    //       break;
    //     case 404:
    //       ElNotification({
    //         title: '错误',
    //         message: "请求错误,未找到该资源",
    //         type: 'error',
    //       })
    //       window.location.href = "/NotFound";
    //       break;
    //     case 405:
    //       ElNotification({
    //         title: '错误',
    //         message: "请求方法未允许",
    //         type: 'error',
    //       })
    //       break;
    //     case 408:
    //       ElNotification({
    //         title: '错误',
    //         message: "请求超时",
    //         type: 'error',
    //       })
    //       break;
    //     case 500:
    //       ElNotification({
    //         title: '错误',
    //         message: "服务器端出错",
    //         type: 'error',
    //       })
    //       break;
    //     case 501:
    //       ElNotification({
    //         title: '错误',
    //         message: "网络未实现",
    //         type: 'error',
    //       })
    //       break;
    //     case 502:
    //       ElNotification({
    //         title: '错误',
    //         message: "网络错误",
    //         type: 'error',
    //       })
    //       break;
    //     case 503:
    //       ElNotification({
    //         title: '错误',
    //         message: "服务不可用",
    //         type: 'error',
    //       })
    //       break;
    //     case 504:
    //       ElNotification({
    //         title: '错误',
    //         message: "网络超时",
    //         type: 'error',
    //       })
    //       break;
    //     case 505:
    //       ElNotification({
    //         title: '错误',
    //         message: "http版本不支持该请求",
    //         type: 'error',
    //       })
    //       break;
    //   }
    // }
    return response;
  },
  (error) => {
    switch(error.response.status){
          case 400:
          ElNotification({
            title: '错误',
            message: error.response.data.msg,
            type: 'error',
          })
          break;
        case 401:
          ElNotification({
            title: '错误',
            message: "未授权，请重新登录",
            type: 'error',
          })
          break;
        case 403:
          ElNotification({
            title: '错误',
            message: "拒绝访问",
            type: 'error',
          })
          break;
        case 404:
          ElNotification({
            title: '错误',
            message: "请求错误,未找到该资源",
            type: 'error',
          })
          break;
        case 405:
          ElNotification({
            title: '错误',
            message: "请求方法未允许",
            type: 'error',
          })
          break;
        case 408:
          ElNotification({
            title: '错误',
            message: "请求超时",
            type: 'error',
          })
          break;
        case 500:
          ElNotification({
            title: '错误',
            message: error.response.data.msg,
            type: 'error',
          })
          break;
        case 501:
          ElNotification({
            title: '错误',
            message: "网络未实现",
            type: 'error',
          })
          break;
        case 502:
          ElNotification({
            title: '错误',
            message: "网络错误",
            type: 'error',
          })
          break;
        case 503:
          ElNotification({
            title: '错误',
            message: "服务不可用",
            type: 'error',
          })
          break;
        case 504:
          ElNotification({
            title: '错误',
            message: "网络超时",
            type: 'error',
          })
          break;
        case 505:
          ElNotification({
            title: '错误',
            message: "http版本不支持该请求",
            type: 'error',
          })
          break;
    }
    console.log(error.response.data.msg)
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    // return Promise.resolve(error.response.data.msg);
  }
);
export default service;
