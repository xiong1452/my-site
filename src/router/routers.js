import Home from '@/views/Home';
import Blog from '@/views/Blog';
import About from '@/views/About';
import Code from '@/views/Code';
import Chat from '@/views/Chat';

export default [
    {
        path: "/", component: Home
    },
    {
        path: "/about", component: About
    },
    {
        path: "/blog", component: Blog
    },
    {
        path: "/Code", component: Code
    },
    {
        path: "/chat", component: Chat
    }
];
