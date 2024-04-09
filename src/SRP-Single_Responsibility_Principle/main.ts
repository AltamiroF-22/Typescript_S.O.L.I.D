import { ShoppingCart } from "./entities/shoppingCart";
import { Order } from "./entities/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Products } from "./entities/products";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Products("T-Shirt", 23.44));
shoppingCart.addProduct(new Products("Pen", 3.44));
shoppingCart.addProduct(new Products("Laptop", 2333.4433));

console.log(shoppingCart.product);
console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
