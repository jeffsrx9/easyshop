import { request } from "./request";




//添加購物車
export function addCart(data){
   return request({
        url:'/api/carts',
        method:'POST',
        data
    })
}


//修改購物車 data={num:1}
export function modifyCart(id,data){
    return request({
         url:`/api/carts/${id}`,
         method:'put',
         data
     })
 }

//選擇商品的狀態  checked,所有選中的id
export function checkedCart(data){
    return request({
         url:'/api/carts/checked',
         method:'patch',//update
         data
     })
 }

//獲取購物車列表
export function getCart(){
    return request({
        url:`/api/carts`,

     })
 }

//刪除購物車
export function deleteCartItem(id){
    return request({
         url:`/api/carts/${id}`,
         method:'delete'
     })
 }



