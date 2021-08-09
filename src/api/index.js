import {ins} from "./interceptors"

export async function getBanners(url) {
    return await ins.get(url);
}
