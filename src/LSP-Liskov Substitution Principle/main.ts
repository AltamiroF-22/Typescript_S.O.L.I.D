import { ShoppingCart } from "./classes/shoppingCart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Products } from "./classes/products";
import {
  FifityPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
  TwentyPercentDiscount,
} from "./classes/discount";

//Discounts
const fifityPercentDiscount = new FifityPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount()

//----------------------------------   Discounts here
const shoppingCart = new ShoppingCart(noDiscount);

const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Products("T-Shirt", 23.44));
shoppingCart.addProduct(new Products("Pen", 3.44));
shoppingCart.addProduct(new Products("Laptop", 2333.4433));

console.log(shoppingCart.product);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
console.log(order.orderStatus);
