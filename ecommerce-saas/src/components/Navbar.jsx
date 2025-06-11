import { cartItemCount } from '@/store/cart.js'; // Import cartItemCount

export default {
  name: 'Navbar',
  setup() {
    // Expose cartItemCount to the template
    return {
      itemCount: cartItemCount
    };
  },
  render() {
    return (
      <nav style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1><router-link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>My E-Commerce Store</router-link></h1>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}><router-link to="/">Home</router-link></li>
          <li style={{ marginRight: '20px' }}><router-link to="/products">Products</router-link></li>
          <li style={{ marginRight: '20px' }}><router-link to="/cart">Cart ({this.itemCount})</router-link></li>
          <li style={{ marginRight: '20px' }}><router-link to="/login">Login</router-link></li>
          {/* Add more links as needed, e.g., user profile */}
        </ul>
      </nav>
    );
  }
};
