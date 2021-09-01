import { Top } from './page/top';
import { About } from './page/about';
import { Skill } from './page/skill';
import { Product } from './page/product';
import { Contact } from './page/contact';

export const Routes = [
  { path: '/', component: Top, exact : true },
  { path: '/about', component: About,},
  { path: '/skill', component: Skill,},
  { path: '/product', component: Product,},
  { path: '/contact', component: Contact,},
];