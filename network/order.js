import { request } from "./request";

//創建訂單
export function createOrder(params){
   return request({
        url:'/api/orders',
        method:'post',
        params
    })
}
 //獲取訂單預覽
export function getOrderPreview(){
    return request({
        url:'/api/orders/preview',
      
     })
 }
 //訂單支付,獲取二維
export function payOrder(order,params){
    return request({
        url:`/api/orders/${order}/pay`,
         params
     })
 }
 //訂單狀態
export function payOrderStatus(order){
    return request({
        url:`/api/orders/${order}/status`,
     })
 }
 //獲取訂單列表
export function getOrderList(params){
    return request({
        url:'/api/orders',
         method:'get',
         params
     })
 }
 //訂單詳情
export function getOrderDetail(order){
    return request({
        url:`/api/orders/${order}`,
         params:{
             include:'user,orderDetails.goods'
         }
     })
 }
 //確認訂單
export function confirmOrder(order){
    return request({
        url:`/api/orders/${order}/confirm`,
        method:'patch',
     })
 }
 //獲取物流訊息
export function viewExpress(order){
    return request({
        url:`/api/orders/${order}/express`,
     })
 }