import { OrderStatus } from "./interface/orderStatus";
import { Messaging } from "../services/messaging";
import { ShoppingCart } from "./shoppingCart";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log("Your cart is empty!");
    }

    this._orderStatus = "closed";
    this.message.sendMessage(
      `Your order with total ${this.cart.totalWithDiscount()} has been received!`
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
