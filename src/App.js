import { Routes, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
