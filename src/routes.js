import { Top } from './page/top';
import { Mind } from './page/mind';
import { History } from './page/history';
import { Skill } from './page/skill';
import { Product } from './page/product';
import { Contact } from './page/contact';

export const Routes = [
  { path: '/', component: Top, exact : true },
  { path: '/mind', component: Mind,},
  { path: '/history', component: History,},
  { path: '/skill', component: Skill,},
  { path: '/product', component: Product,},
  { path: '/contact', component: Contact,},
];