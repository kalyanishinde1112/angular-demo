export class order
{
    orderId!:number;
    fullName!:string;
    mobile!:string;
    emailId!:string;
    address!:Address;
    products!:Product[];
    totalAmmount!:number;
    totalDiscount!:number;
    finalAmmountTOpay!:number;
    deleveryType!:string;
    finalAmountToPay!:number;

}
class Address{
line1!:string;
line2!:string;
city!:string;
pincode!:number;
country!:string
}

export class Product{
    drugCode!:string;
    productName!:string
    description!:string;
    brand!:string;
    actualPrice!:number;
    discountPrice!:number;
    producttotalPrice!:number;
    type!:string;
    quantity!:number;

}


 