import { Image, Seller } from "./";

export interface Vehicle {
  _id: string,
  portrait?: Image,
  owner: string,
  location: string,
  brand: string,
  type: string,
  model: string,
  condition: string,
  fuel: string,
  year: string,
  price: number,
  seller: Seller;
  images?: Image[]
}
