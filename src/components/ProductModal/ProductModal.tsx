import React, { useState, useEffect } from 'react';
import type { Product } from '../../@types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

useEffect(() => {
  if (product) {
    document.body.style.overflow = 'hidden';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);


  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className={styles.imageSection}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.infoSection}>
          <h2 id="modal-product-title" className={styles.title}>
            {product.productName}
          </h2>

          <p className={styles.price}>{formatCurrency(product.price)}</p>

          <p className={styles.description}>
            {product.descriptionShort || 'Many desktop publishing packages and web page editors now many desktop publishing.'}
          </p>

          <a href="#detalhes" className={styles.moreDetails}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actionsRow}>
            <div className={styles.quantitySelector}>
              <button
                type="button"
                onClick={handleDecrease}
                disabled={quantity <= 1}
                aria-label="Diminuir quantidade"
              >
                &minus;
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                onClick={handleIncrease}
                aria-label="Aumentar quantidade"
              >
                &#43;
              </button>
            </div>

            <button type="button" className={styles.buyModalButton}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};