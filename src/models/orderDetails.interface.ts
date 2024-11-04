import Product from 'src/features/products/models/product.interface';
import Order from './order.interface';

export default interface OrderDetails {
  id: number;
  order: Order;
  product: Product;
  quantity: number;
}
