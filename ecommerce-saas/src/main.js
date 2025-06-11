import { createApp } from 'vue';
import App from './App.jsx'; // Ensure it points to App.jsx
import router from './router'; // Import the router

// Create the Vue app, use the router, and mount it
const app = createApp(App);
app.use(router);
app.mount('#app');
