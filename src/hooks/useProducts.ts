// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import type { Product } from '../@types/product';
import { fetchProducts } from '../services/api';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (data.success) {
          setProducts(data.products);
        } else {
          setError('Não foi possível carregar a lista de produtos.');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido ao buscar produtos.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};