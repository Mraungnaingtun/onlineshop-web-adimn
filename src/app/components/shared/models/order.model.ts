
export interface Order {
    orderId?: number;
    customerId: number;
    orderDate: Date;
    totalAmount: number;
    status: string;
    shippingAddress: string;
    billingAddress: string;
    createdAt?: Date;
    updatedAt?: Date;
}
