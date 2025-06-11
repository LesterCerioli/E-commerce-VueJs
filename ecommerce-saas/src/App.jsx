import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  render() {
    return (
      <div id="app">
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {/* Router view will go here eventually */}
          <router-view />
        </main>
        <Footer />
      </div>
    );
  }
};
