import React, { useRef } from 'react';
import type { Product } from '../../@types/product';
import { ChevronIcon } from '../Icons/ChevronIcon';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductCarousel.module.scss';

interface ProductCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onSelectProduct,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 322; // Distância do scroll a cada clique
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.prev}`}
        onClick={() => handleScroll('left')}
        aria-label="Anterior"
      >
        <ChevronIcon className={styles.chevronIcon} />
      </button>

      <div className={styles.carouselContainer} ref={containerRef}>
        {products.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${index}`}
            product={product}
            onOpenModal={onSelectProduct}
          />
        ))}
      </div>

      <button
        type="button"
        className={`${styles.navButton} ${styles.next}`}
        onClick={() => handleScroll('right')}
        aria-label="Próximo"
      >
       <ChevronIcon className={styles.iconNext} />
      </button>
    </div>
  );
};