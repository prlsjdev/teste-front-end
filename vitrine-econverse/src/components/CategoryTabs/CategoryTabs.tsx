import React, { useState } from 'react';
import styles from './CategoryTabs.module.scss';

const CATEGORIES = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
];

export const CategoryTabs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('CELULAR');

  return (
    <nav className={styles.categoryNav} aria-label="Categorias de produtos">
      <ul className={styles.categoryList}>
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <li key={category} className={styles.categoryItem}>
              <button
                type="button"
                className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};