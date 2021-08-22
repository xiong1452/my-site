import {ins} from "./interceptors"

export async function getBanners(url) {
    return await ins.get(url);
}

export async function getBlogType() {
    return await ins.get('/api/blogtype')
}

export async function getBlogPra(page = 1, limit = 10, categoryid = -1) {
    return await ins.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

export async function getBlog(id) {
    return await ins.get(`/api/blog/${id}`)
}

export async function postComment(commentInfo) {
    return await ins.post('/api/comment', commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10,) {
    return await ins.get('/api/comment', {
        params: {
            blogid,
            page,
            limit
        }
    })
}

export async function postChat(commentInfo) {
    return await ins.post('/api/comment', commentInfo);
}

export async function getChat(page = 1, limit = 10,) {
    return await ins.get('/api/message', {
        params: {
            page,
            limit
        }
    })
}


export async function getIndexInfo(){
    return await ins.get('/api/setting')
}

export async function getCodeData() {
    return await ins.get('/api/project')
}

export async function getAbout() {
    return await ins.get('/api/about')
}