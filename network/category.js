import {
    request
} from "./request";


export function getCategory() {
    return request({
        url: '/api/goods',
    })
}
export function getCategoryGoods(order = 'sales', Cid = 180, page = 1) {
    return request({
        url: `/api/goods?category_id=${Cid}&page=${page}&${order}=0`,
    })
}

///api/goods?category_id=1&page=1&$sales=1