import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Midias from '../views/Midias.vue';
import Indicacoes from '../views/Indicacoes.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/midias',
        name: 'Midias',
        component: Midias,
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