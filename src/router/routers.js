import "nprogress/nprogress.css"
import {start, done, configure} from "nprogress"

configure({
    trickleSpeed: 20
})

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration)
    })
}

export default [
    {
        name: "home", path: "/", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Home");
            done();
            return comp;
        },
        meta: {
            title: "首页"
        }
    },
    {
        name: 'about', path: "/about", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/About");
            done();
            return comp;
        },
        meta: {
            title: "关于"
        }
    },
    {
        name: 'blog', path: "/blog", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Blog");
            done();
            return comp;
        },
        meta: {
            title: "文章"
        }
    },
    {
        name: 'category', path: "/blog/cate/:categoryId", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Blog")
            done();
            return comp;
        },
        meta: {
            title: "文章列表"
        }
    },
    {
        name: 'detail', path: "/blog/:id", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Blog/Detail");
            done();
            return comp;
        },
        meta: {
            title: "文章详情"
        }
    },
    {
        name: 'code', path: "/Code", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Code");
            done();
            return comp;
        },
        meta: {
            title: "项目&描述"
        }
    },
    {
        name: 'chat', path: "/chat", component: async () => {
            start()
            if (process.env.NODE_ENV === "development") {
                await delay(2000)
            }
            const comp = await import("@/views/Chat");
            done();
            return comp;
        },
        meta: {
            title: "留言板"
        }
    }
];
