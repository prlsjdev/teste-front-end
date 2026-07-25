import type { ProductsApiResponse } from '../@types/product';

const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const fetchProducts = async (): Promise<ProductsApiResponse> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao carregar os produtos: ${response.statusText}`);
  }

  const data: ProductsApiResponse = await response.json();
  return data;
};