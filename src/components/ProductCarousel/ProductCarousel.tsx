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
    const container = containerRef.current;

    if (container) {
      const cards = Array.from(container.children) as HTMLElement[];
      const firstCard = cards[0];

      if (!firstCard) return;

      const containerStyles = window.getComputedStyle(container);
      const visibleWidth =
        container.clientWidth -
        Number.parseFloat(containerStyles.paddingLeft) -
        Number.parseFloat(containerStyles.paddingRight);
      const cardStep = cards[1]
        ? cards[1].offsetLeft - firstCard.offsetLeft
        : firstCard.offsetWidth;
      const gap = Math.max(0, cardStep - firstCard.offsetWidth);
      const cardsPerPage = Math.max(
        1,
        Math.floor((visibleWidth + gap) / cardStep),
      );

      const currentIndex = cards.reduce((closestIndex, card, index) => {
        const closestDistance = Math.abs(
          cards[closestIndex].offsetLeft - firstCard.offsetLeft - container.scrollLeft,
        );
        const distance = Math.abs(
          card.offsetLeft - firstCard.offsetLeft - container.scrollLeft,
        );

        return distance < closestDistance ? index : closestIndex;
      }, 0);
      const nextIndex = Math.min(
        Math.max(
          currentIndex + (direction === 'left' ? -cardsPerPage : cardsPerPage),
          0,
        ),
        cards.length - 1,
      );

      container.scrollTo({
        left: cards[nextIndex].offsetLeft - firstCard.offsetLeft,
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
