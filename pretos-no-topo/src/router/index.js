import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Galeria from '../views/Galeria.vue';
import Indicacoes from '../views/Indicacoes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria,
  },
  {
    path: '/indicacoes',
    name: 'Indicacoes',
    component: Indicacoes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
