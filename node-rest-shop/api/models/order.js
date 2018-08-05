export default class Order {
    constructor({ products, totalPrice }) {
        this.products = products || [];
        this.totalPrice = totalPrice;
    }
}