import axios from "axios";
import router from "@/router";
import {
    Notify,
    Toast
} from "vant";

export function request(config) {
    const instance = axios.create({     //https://api.shop.eduwork.cn/
        baseURL:'https://jeffsrx9.loca.lt',// https://jeffsrx9.loca.lt 
                                              //http://localhost:3006
        timeout: 5000
    })
    // 請求攔截
    instance.interceptors.request.use(config => { 
        // 如果有一個街口需要認證才能訪問  在這統一設置
        const token = window.localStorage.getItem('token');
        if (token) {
           config.headers.authorization = 'Bearer ' + token;
        }
        //直接放行 
        return config; 
    }, err => {
}) 
    // 響應攔截
    instance.interceptors.response.use(res => {
        return res.data ? res.data : res;
    }, err => {
 
        // 需要授權才能訪問的接口 統一去login授權
      if (err.response.status == 401) {
            Toast.fail('請先登錄');
            router.push({
                path: '/login'
            });
        }
        // 如果有錯誤 ,這裡會處理顯示錯誤信息
      return  Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0])

    })
    return instance(config)
}