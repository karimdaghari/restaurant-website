// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import BootstrapVue from 'bootstrap-vue';
import '@/assets/style/custom.scss';
import Unicon from 'vue-unicons';
import {
  uniFacebookF,
  uniFacebook,
  uniInstagram,
  uniMapPin,
  uniPhone
} from 'vue-unicons/src/icons';

export default function(Vue, { router, head, isClient }) {
  const icons = [uniFacebookF, uniFacebook, uniInstagram, uniMapPin, uniPhone];

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(BootstrapVue);
  Unicon.add(icons);
  Vue.use(Unicon);
}
