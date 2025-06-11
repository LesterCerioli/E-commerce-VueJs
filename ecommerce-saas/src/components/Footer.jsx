export default {
  name: 'Footer',
  render() {
    return (
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} My E-Commerce Store. All rights reserved.</p>
      </footer>
    );
  }
};
