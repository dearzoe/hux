import Vue from 'vue'
import Router from 'vue-router'
import First from 'components/first'
import Second from 'components/second'
import Third from 'components/third'
import Fourth from 'components/fourth'
import f from 'components/f'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: Fourth
    },
    {
      path: '/f',
      name: 'f',
      component: f
    }
  ]
})
