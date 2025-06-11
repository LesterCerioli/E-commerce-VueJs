import ProductCard from './ProductCard.jsx';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true,
    }
  },
  render() {
    if (!this.products || this.products.length === 0) {
      return <div class="product-list-empty">No products to display.</div>;
    }
    return (
      <div class="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {this.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
};
