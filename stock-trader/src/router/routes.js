import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Stock from "../components/Stock";

export const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/stock',
        name: 'stock',
        component: Stock
    }
];