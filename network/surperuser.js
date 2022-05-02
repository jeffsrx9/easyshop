import { request } from "./request";

//新增商品
export function addAcart(params){
    return request({
        url:'/api/addAcart',
        method:'post',
        params 
    })
}
//取得商品列表
export function getCartList(){
    return request({
        url:'/api/getCartList',
    })
}
//取得商品ID
export function getEditCart(id){
    return request({
        url:`/api/editCart/${id}`,

    })
}
//編輯商品詳情
export function editCart(id,params){
    return request({
        url:`/api/editCart/${id}`,
        method:'put',
        params
    })
}
//刪除商品
export function deleteCart(id){
    return request({
        url:`/api/deleteCart/${id}`,
        method:'delete',
    })
}




//新增會員
export function addUser(params){
    return request({
        url:'/api/addUser',
        method:'post',
        params
    })
}
//取得會員列表
export function getUserList(){
    return request({
        url:'/api/getUserList',
    })
}

//取得會員詳情ID
export function getEditUser(id){
    return request({
        url:`/api/editUser/${id}`,
    })
}
//編輯會員詳情
export function editUser(id,params){
    return request({
        url:`/api/editUser/${id}`,
        method:'PUT',
        params
    })
}
//刪除會員
export function deleteUser(id){
    return request({
        url:`/api/deleteUser/${id}`,
        method:'delete',
    })
}