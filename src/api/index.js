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