import Vue from 'vue';
import Router from 'vue-router';
import EventList from '@/components/EventList';
import NotFound from '@/components/NotFound';
import EventInfo from '@/components/EventInfo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventList
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    },
    // put your vue routes here
    {
      path: '/EventDetails/:EventId',
      name: 'EventDetails',
      component: EventInfo
    }
  ]
});
