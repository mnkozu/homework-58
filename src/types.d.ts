export interface Clothe {
  id: string
  name: string;
  size: string;
  image: string;
  color: string;
  price: number;
}

export interface CartClothe {
  clothe: Clothe;
  amount: number;
}