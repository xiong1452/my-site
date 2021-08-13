import Home from '@/views/Home';
import Blog from '@/views/Blog';
import About from '@/views/About';
import Code from '@/views/Code';
import Chat from '@/views/Chat';
import Detail from "@/views/Blog/Detail";

export default [
    {
        name: "home", path: "/", component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        name: 'about', path: "/about", component: About,
        meta: {
            title: "关于"
        }
    },
    {
        name: 'blog', path: "/blog", component: Blog,
        meta: {
            title: "文章"
        }
    },
    {
        name: 'category', path: "/blog/cate/:categoryId", component: Blog,
        meta: {
            title: "文章列表"
        }
    },
    {
        name: 'detail', path: "/blog/:id", component: Detail,
        meta: {
            title: "文章详情"
        }
    },
    {
        name: 'code', path: "/Code", component: Code,
        meta: {
            title: "项目&描述"
        }
    },
    {
        name: 'chat', path: "/chat", component: Chat,
        meta: {
            title: "留言板"
        }
    }
];
