import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
