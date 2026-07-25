// src/App.tsx
import React, { useState } from 'react';
import type { Product } from './@types/product';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { useProducts } from './hooks/useProducts';
import {ProductCarousel} from './components/ProductCarousel/ProductCarousel';
import { ProductModal } from './components/ProductModal/ProductModal';
import './styles/main.scss';

export const App: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    console.log('Produto selecionado para abrir no modal:', product);
  };

  return (
    <div className="app-container">
      {/* Header Semântico */}
      <header role="banner">
        {/* Você pode adicionar sua Logo ou Navbar principal aqui futuramente */}
      </header>

      {/* Main principal do conteúdo */}
      <main>
        <section aria-labelledby="showcase-title">
          <div className="sectionTitleContainer">
            <h2 id="showcase-title" className="sectionTitle">
              Produtos relacionados
            </h2>
          </div>

          {/* Abas de Categorias */}
          <CategoryTabs />

          <div style={{ maxWidth: '1280px', margin: '20px auto', padding: '0 16px' }}>
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