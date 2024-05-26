
export interface Customer {
    customerId?: number;
    customername: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
    createdAt?: Date;
}

//------------assign like this
// customer: Customer = {
//     customername: '',
//     email: '',
//     passwordHash: '',
//     firstName: '',
//     lastName: '',
//     phone: '',
//     address: '',
// };
