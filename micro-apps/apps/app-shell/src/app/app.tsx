import React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Header } from '@ebuy/ui';
import { Container } from 'semantic-ui-react';

const Catalog = React.lazy(() => import('catalog/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Container style={{ marginTop: '5m' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
      </Container>

    </React.Suspense>
  );
}

export default App;
