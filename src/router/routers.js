export default [
    {
        name: "home", path: "/", component: () => import("@/views/Home"),
        meta: {
            title: "首页"
        }
    },
    {
        name: 'about', path: "/about", component: () => import("@/views/About"),
        meta: {
            title: "关于"
        }
    },
    {
        name: 'blog', path: "/blog", component: () => import("@/views/Blog"),
        meta: {
            title: "文章"
        }
    },
    {
        name: 'category', path: "/blog/cate/:categoryId", component: () => import("@/views/Blog"),
        meta: {
            title: "文章列表"
        }
    },
    {
        name: 'detail', path: "/blog/:id", component: () => import("@/views/Blog/Detail"),
        meta: {
            title: "文章详情"
        }
    },
    {
        name: 'code', path: "/Code", component: () => import("@/views/Code"),
        meta: {
            title: "项目&描述"
        }
    },
    {
        name: 'chat', path: "/chat", component: () => import("@/views/Chat"),
        meta: {
            title: "留言板"
        }
    }
];
