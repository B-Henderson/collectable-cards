import Collection from '../views/Collection.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Settings from '../views/Settings.vue'
import Home from '../views/Home.vue'
import SingleCard from '../views/SingleCard.vue'
import App from '../App.vue'

const routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', redirect: '/collection' },
            { path: '/collection/', component: Collection },
            { path: '/leaderboard', component: Leaderboard },
            { path: '/settings', redirect: '/collection' },
            { path: '/card/:id', component: SingleCard, props: true}
        ],
    },
]

export default routes
