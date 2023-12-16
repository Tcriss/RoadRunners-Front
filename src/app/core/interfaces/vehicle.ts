import { Image } from "./image";

export interface Vehicle{
  _id: string,
  portrait?: Image,
  owner: string,
  owner_email: string,
  location: string,
  brand: string,
  type: string,
  model: string,
  condition: string,
  fuel: string,
  year: string,
  price: number,
  images?: Image[]
}
