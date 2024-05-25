export interface Product {
    productId?: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    categoryId: number;
    brandId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
