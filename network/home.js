import { request } from "./request";

const corsURL = 'https://cors-anywhere.herokuapp.com/'; 
export function getHomeAllData(){
   return request({
        url:'/api/index',
    })
}
export function getSwiper(){
   return request({
        url:'/api/swiper',
    })
}
export function getaddress(){
   return request({
        url:`/api/taiwan`,
    })
}

export function getHomeGoods(type='sales',page=1){
   return request({
        url:'/api/index?'+ type+'=1&page='+page,
    })
}