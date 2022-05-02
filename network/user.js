import { request } from "./request";


export function register(data){
    return request({
        url:'/api/register',
        method:'post',
        data
    })
}
export function login(data){
    return request({
        url:'/api/login',
        method:'POST',
        data
    })
}
export function logout(data){
    return request({
        url:'/api/logout',
        method:'POST',
        
    })
}
export function getUser(){
    return request({
        url:'/api/user',
        method:'get',
    })
}


export function editUser(params){
    return request({
        url:'/api/profile/setting',
        method:'put',
        params
    })
}
