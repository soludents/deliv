export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  creationDate?: number;
  thumbnailUrl?: string;
  url?: string;
  fedex?: IProduct;
  ups?: IProduct[];
  deliveryComp?: string;
  type?: 1 | 2 | 3;
}
