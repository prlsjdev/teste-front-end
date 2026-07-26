import React from 'react';
import type { Product } from '../../@types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  // Preço antigo fictício baseado no layout (ex: R$ 30,90 ou +10%)
  const oldPrice = product.price * 1.1;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>

      <h3 className={styles.title} title={product.productName}>
        {product.productName}
      </h3>

      <div className={styles.priceContainer}>
        <p className={styles.oldPrice}>{formatCurrency(oldPrice)}</p>
        <p className={styles.currentPrice}>{formatCurrency(product.price)}</p>
        <p className={styles.installment}>
          ou 2x de {formatCurrency(product.price / 2)} sem juros
        </p>
        <p className={styles.shipping}>Frete grátis</p>
      </div>
      <button
        type="button"
        className={styles.buyButton}
        onClick={() => onOpenModal(product)}
      >
        COMPRAR
      </button>
    </article>
  );
};