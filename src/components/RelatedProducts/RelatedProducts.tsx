import React, { useState } from 'react';
import type { Product } from '../../@types/product';
import { useProducts } from '../../hooks/useProducts';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CategoryTabs } from '../CategoryTabs/CategoryTabs';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductModal } from '../ProductModal/ProductModal';

export const RelatedProducts: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="app-container">
      <section aria-labelledby="showcase-title" >
        <SectionTitle />
        <CategoryTabs />

        {loading && <p className="status-message">Carregando produtos...</p>}
        {error && <p className="status-message error">{error}</p>}

        {!loading && !error && products.length > 0 && (
          <ProductCarousel
            products={products}
            onSelectProduct={(product) => setSelectedProduct(product)}
          />
        )}

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </section>
    </main>
  );
};

export default RelatedProducts;