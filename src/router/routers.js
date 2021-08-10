import Home from '@/views/Home';
import Blog from '@/views/Blog';
import About from '@/views/About';
import Code from '@/views/Code';
import Chat from '@/views/Chat';

export default [
    {
        name: "home", path: "/", component: Home
    },
    {
        name: 'about', path: "/about", component: About
    },
    {
        name: 'blog', path: "/blog", component: Blog
    },
    {
        name: 'category', path: "/blog/cate/:categoryId", component: Blog
    },
    {
        name: 'code', path: "/Code", component: Code
    },
    {
        name: 'chat', path: "/chat", component: Chat
    }
];
