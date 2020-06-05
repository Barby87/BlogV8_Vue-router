import Vue from 'vue';
import VueRouter from 'vue-router';
const Inicio = ()=> import ('../views/Inicio.vue');
const SobreMi = ()=> ('../views/SobreMi.vue');
const Contacto = ()=> import('../views/Contacto.vue');
const Post = ()=> ('../views/Post.vue');
import Articulo from '../views/Articulo.vue';
import NotFound from '../views/NotFound.vue';
import Administrador from '../views/Administrador.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    alias: ['/home','/inicio', '/portada']
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi,
    alias: ['/acerca']
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    alias: ['/contactame']
  },
  {
    path: '/administrador/:id',
    name: 'Administrador',
    component: Administrador,
    props: true
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    children: [
      {
        path: ':articulo',
        component: Articulo,
        name: 'Articulo'
      }
    ]
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
