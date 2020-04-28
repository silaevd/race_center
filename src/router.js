import Vue from 'vue'
import Router from 'vue-router'
import News from './components/News.vue'
import Events from './components/Events.vue'

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
            path: '/Events',
            component: Events,
            name: 'Events',
        },
        // {
        //     path: '/section-info/:id',
        //     component: SectionInfo,
        //     name: 'sectionInfo',
        //     props: true
        // },

    ]
})
