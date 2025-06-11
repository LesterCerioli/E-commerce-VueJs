export default {
  name: 'ProductDetailPage',
  props: {
    // The router will pass the 'id' as a prop
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      product: null,
      
      allProducts: [
        { id: 1, name: 'Awesome T-Shirt', price: 29.99, imageUrl: 'https://via.placeholder.com/300/FF0000/FFFFFF?Text=T-Shirt+Large', description: 'A really awesome t-shirt, made from the finest cotton.' },
        { id: 2, name: 'Cool Mug', price: 15.50, imageUrl: 'https://via.placeholder.com/300/00FF00/FFFFFF?Text=Mug+Large', description: 'The coolest mug to enjoy your beverages.' },
        { id: 3, name: 'Stylish Cap', price: 22.00, imageUrl: 'https://via.placeholder.com/300/0000FF/FFFFFF?Text=Cap+Large', description: 'A very stylish cap that will make you stand out.' },
        { id: 4, name: 'Epic Hoodie', price: 55.75, imageUrl: 'https://via.placeholder.com/300/FFFF00/000000?Text=Hoodie+Large', description: 'An epic hoodie for all your epic adventures.' }
      ]
    };
  },
  created() {
    this.findProduct();
  },
  watch: {
    
    id: 'findProduct'
  },
  methods: {
    findProduct() {
      const productId = parseInt(this.id);
      this.product = this.allProducts.find(p => p.id === productId);
    }
  },
  render() {
    if (!this.product) {
      return <div class="product-detail-page" style={{ padding: '1rem', textAlign: 'center' }}><h2>Product not found!</h2></div>;
    }
    return (
      <div class="product-detail-page" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={this.product.imageUrl} alt={this.product.name} style={{ maxWidth: '300px', maxHeight: '300px', marginBottom: '1rem' }} />
        <h2>{this.product.name}</h2>
        <p style={{ fontSize: '1.2em', color: '#333' }}>${this.product.price.toFixed(2)}</p>
        <p style={{ textAlign: 'center', maxWidth: '600px' }}>{this.product.description}</p>
        <button style={{ padding: '10px 20px', fontSize: '1em', marginTop: '1rem' }}>Add to Cart</button>
        <router-link to="/products" style={{ marginTop: '1rem' }}>Back to Products</router-link>
      </div>
    );
  }
};
