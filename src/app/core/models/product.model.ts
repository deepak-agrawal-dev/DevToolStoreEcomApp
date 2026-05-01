/**
 * Product structure from API.
 */
export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  featured: boolean;
  popular: boolean;
  newArrival: boolean;
  trending: boolean;
}