import { Icategory } from "./category";



export interface IVariant {
  size: string; 
  quantity: number; 
  price: number; 
  discount?: number; 
  createdAt?: string;
  updatedAt?: string;
}


export interface Iproduct {
  _id: string; 
  masp: string;
  name: string; 
  price: number;
  img: string[];
  moTa: string; 
  brand: string;
  category: Icategory; 
  status: boolean;
  discountCode?: string; 
  createdAt?: string;
  updatedAt?: string; 
}


export type IProductLite = Pick<
  Iproduct,
  | "_id"
  | "masp"
  | "name"
  | "img"
  | "category"
  | "status"
  | "price"
  | "moTa"
  | "brand"
  | "updatedAt"
  | "discountCode" 
  |"createdAt"
  |"updatedAt"
> & {
  price?: number; 
  soLuong?: number; 
};