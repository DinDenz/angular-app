export interface IProduct {
  id: number;
  title: string;
  price: number;
  year: number;
  image?: string;
  configure: IProductConfig;
}

export interface IProductConfig {
  chip: string;
  SSD: string;
  memory: string;
  display: string;
}
