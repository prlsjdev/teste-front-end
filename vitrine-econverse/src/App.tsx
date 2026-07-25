import React, { useState } from 'react';
import type { Product } from './@types/product';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { useProducts } from './hooks/useProducts';
import {ProductCarousel} from './components/ProductCarousel/ProductCarousel';
import { ProductModal } from './components/ProductModal/ProductModal';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import './styles/main.scss';

export const App: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app-container">
      <header role="banner">
      </header>
      <main>
        <section aria-labelledby="showcase-title">
          <SectionTitle />
          <CategoryTabs />

          <div style={{ maxWidth: '1350px', margin: '20px auto', padding: '0' }}>
            {loading && (
                <p style={{ textAlign: 'center', margin: '40px 0', color: '#808080' }}>
                  Carregando produtos...
                </p>
              )}
              {error && (
                <p style={{ textAlign: 'center', margin: '40px 0', color: '#e74c3c' }}>
                  {error}
                </p>
              )}
              {!loading && !error && products.length > 0 && (
                <ProductCarousel
                  products={products}
                  onSelectProduct={handleSelectProduct}
                />
              )}
          </div>
        </section>
      </main>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default App;