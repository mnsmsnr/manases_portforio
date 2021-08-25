import Home from './page/home';
import About from './page/about';
import Skill from './page/skill';
import Product from './page/product';
import Contact from './page/contact';


const routes = [
    { path: '/home', component: Home, exact : true },
    { path: '/about', component: About,},
    { path: '/skill', component: Skill,},
    { path: '/product', component: Product,},
    { path: '/contact', component: Contact,},
  ];
  
  export default routes;