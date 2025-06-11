export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  render() {
    if (!this.product) {
      return <div class="product-card-empty">No product data</div>;
    }
    const productDetailUrl = `/products/${this.product.id}`;
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', width: '200px', textAlign: 'center' }}>
        <router-link to={productDetailUrl}>
          <img src={this.product.imageUrl || 'https://via.placeholder.com/150'} alt={this.product.name} style={{ maxWidth: '100%', height: 'auto', borderBottom: '1px solid #eee', marginBottom: '0.5rem' }} />
          <h3>{this.product.name || 'Product Name'}</h3>
        </router-link>
        <p>${this.product.price ? this.product.price.toFixed(2) : '0.00'}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
};
