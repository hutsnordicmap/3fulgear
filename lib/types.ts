export type Variation = {
  label: string;
  price: number;
  regular: number;
  inStock: boolean;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  nameFi: string;
  category: string;
  permalink: string;
  images: string[];
  inStock: boolean;
  onSale: boolean;
  variations: Variation[];
  eurSummary: number[];
  summaryFi: string;
  bulletsFi: string[];
};

export type ProductCopy = {
  name: string;
  summary: string;
  bullets: string[];
};

export type RawProduct = {
  id: number;
  slug: string;
  name: string;
  category: string;
  permalink: string;
  images: string[];
  inStock: boolean;
  onSale: boolean;
  variations: Variation[];
  eurSummary: number[];
};
