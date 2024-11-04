import Product from '../features/products/models/product.interface';
export default interface Order {
  id: number;
  product: Product;
  quantity: number;
  date: Date;
}
