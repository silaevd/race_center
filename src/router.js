import Vue from 'vue'
import Router from 'vue-router'
import News from './components/News.vue'
import Events from './components/Events.vue'
import Event from './components/Event.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: News,
            name: 'News',
        },
        {
            path: '/events',
            component: Events,
            name: 'Events',
        },
        {
            path: '/event',
            component: Event,
            name: 'Event',
        },
        {
            path: '/login',
            component: Login,
            name: 'Login',
        },
        // {
        //     path: '/section-info/:id',
        //     component: SectionInfo,
        //     name: 'sectionInfo',
        //     props: true
        // },

    ]
})
