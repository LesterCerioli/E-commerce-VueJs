import ProductList from '@/components/ProductList.jsx'; // Assuming @ alias is configured for src

export default {
  name: 'ProductListingPage',
  components: {
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Awesome T-Shirt', price: 29.99, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=T-Shirt' },
        { id: 2, name: 'Cool Mug', price: 15.50, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?Text=Mug' },
        { id: 3, name: 'Stylish Cap', price: 22.00, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Cap' },
        { id: 4, name: 'Epic Hoodie', price: 55.75, imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?Text=Hoodie' }
      ]
    };
  },
  render() {
    return (
      <div class="product-listing-page" style={{ padding: '1rem' }}>
        <h2>Our Products</h2>
        <ProductList products={this.products} />
      </div>
    );
  }
};
