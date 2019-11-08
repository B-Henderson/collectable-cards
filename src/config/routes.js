import Collection from '../views/Collection.vue';
import Leaderboard from '../views/Leaderboard.vue';
import Settings from '../views/Settings.vue';
import Home from '../views/Home.vue';
import App from '../App.vue';

const routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', component: Home },
      { path: 'collection', component: Collection },
      { path: 'leaderboard', component: Leaderboard },
      { path: 'settings', component: Settings }
    ]
  }
];

export default routes;
