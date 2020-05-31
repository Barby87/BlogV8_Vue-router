import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Articulo from '../views/Articulo.vue';
import SobreMi from '../views/SobreMi.vue';
import Contacto from '../views/Contacto.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/articulo',
    name: 'Articulo',
    component: Articulo
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
