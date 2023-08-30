import Product from "./ProductModel";

export default interface ProductResponse {
  count: number;
  products: Product[];
}
