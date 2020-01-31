import Collection from '../views/Collection.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Locations from '../views/Locations.vue'
import Home from '../views/Home.vue'
import SingleCard from '../views/SingleCard.vue'
import App from '../App.vue'
import Scan from '../views/Scan.vue'
const routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', component: Home },
            { path: '/collection/', component: Collection },
            { path: '/leaderboard', component: Leaderboard },
            { path: '/locations', component: Locations },
            { path: '/scan', component: Scan },
            { path: '/card/:id', component: SingleCard, props: true },
        ],
    },
]

export default routes
