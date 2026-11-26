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
  /** Name, summary and bullets in the page's language (Finnish or Swedish). */
  title: string;
  category: string;
  permalink: string;
  images: string[];
  inStock: boolean;
  onSale: boolean;
  variations: Variation[];
  eurSummary: number[];
  summary: string;
  bullets: string[];
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
