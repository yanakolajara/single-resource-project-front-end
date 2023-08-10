import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header, Loading, Footer } from './components';
import { Recipe, Reviews, Home, Contacts, NotFound, About } from './pages';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes/:id" element={<Recipe />} />
              <Route path="/recipes/:id/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
