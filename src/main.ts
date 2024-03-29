import { createApp } from 'vue';
import './styles/mug.scss';
import App from './App.vue';
import { createPinia } from "pinia";
// import { createVuetify } from 'vuetify';

// export const vuetify = createVuetify({
//     theme: {
//       defaultTheme: 'light',
//     },
//   });
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
