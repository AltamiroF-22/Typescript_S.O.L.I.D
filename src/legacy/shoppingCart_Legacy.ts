interface Product {
  name: string;
  price: number;
}

type OrderStatus = "open" | "closed";

export class ShoppingCartLegacy {
  private readonly _product: Product[] = [];
  private _orderStatus: OrderStatus = "open";

  addProduct(product: Product): void {
    this._product.push(product);
  }

  removeProduct(index: number): void {
    this._product.splice(index, 1);
  }

  get product(): Readonly<Product[]> {
    return this._product;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._product
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      return console.log("Your cart is empty!");
    }

    this._orderStatus = "closed";
    this.sendMessage(
      `Your order with total ${this.total()} has been received!`
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._product.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }

  saveOrder(): void {
    console.log("order saved with success!");
  }

  clear(): void {
    this._product.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addProduct({ name: "T-Shirt", price: 23.44 });
shoppingCart.addProduct({ name: "Pen", price: 3.44 });
shoppingCart.addProduct({ name: "Laptop", price: 2333.4433 });

console.log(shoppingCart.product);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
