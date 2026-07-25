export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductsApiResponse {
  success: boolean;
  products: Product[];
}