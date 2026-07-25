import type { ProductsApiResponse } from '../@types/product';
const API_BASE_URL = import.meta.env.VITE_ECON_API_URL || '/api-econverse'; // dentro do cenário real como seria o endpoint da API
const API_URL = `${API_BASE_URL}/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`;
  
export const fetchProducts = async (): Promise<ProductsApiResponse> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao carregar os produtos: ${response.statusText}`);
  }

  const data: ProductsApiResponse = await response.json();
  return data;
};