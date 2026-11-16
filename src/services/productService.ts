import axios from "axios";

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

interface ProductsResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}

const API_URL = "https://dummyjson.com/products?limit=20";

export async function getProducts(): Promise<ApiProduct[]> {
  const response = await axios.get<ProductsResponse>(API_URL);

  return response.data.products;
}
