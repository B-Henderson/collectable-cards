import Collection from '../views/Collection.vue';
import Scan from '../views/Scan.vue';
import Profile from '../views/Profile.vue';
import Home from '../views/Home.vue';
import App from '../App.vue';
const routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', component: Home },
      { path: 'scan', component: Scan },
      { path: 'profile', component: Profile },
      { path: 'collection', component: Collection }
    ]
  }
];
export default routes;
