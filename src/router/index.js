import { createRouter, createWebHistory } from 'vue-router';
import ProductListingPage from '@/views/ProductListingPage.jsx';
import ProductDetailPage from '@/views/ProductDetailPage.jsx'; // Import the new page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductListingPage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductListingPage
  },
  {
    path: '/products/:id', // Dynamic route for product details
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: true // This allows the route param 'id' to be passed as a prop to the component
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
