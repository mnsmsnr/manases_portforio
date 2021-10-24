import { Top } from './page/top';
import { AboutMe } from './page/aboutMe';
import { History } from './page/history';
import { Skill } from './page/skill';
import { Product } from './page/product';
import { Contact } from './page/contact';

export const Routes = [
  { path: '/', component: Top, exact : true },
  { path: '/aboutMe', component: AboutMe,},
  { path: '/history', component: History,},
  { path: '/skill', component: Skill,},
  { path: '/product', component: Product,},
  { path: '/contact', component: Contact,},
];