export type ESimOffer = {
  id: string;
  name: string;
  days: number;
  dataGb: number;
  price: string;
  coverage: string;
  coverageCount?: number;
  badge?: "5G";
  logo?: string;
};

export const popularOffers: ESimOffer[] = [
  {
    id: "global-13",
    name: "Global 13 GB",
    days: 365,
    dataGb: 13,
    price: "$41.99",
    coverage: "EU, UAE",
    coverageCount: 87,
    logo: "3",
  },
  {
    id: "europe-usa-15",
    name: "Europe and USA 15 GB",
    days: 30,
    dataGb: 15,
    price: "$14.99",
    coverage: "EU, USA",
    coverageCount: 40,
    badge: "5G",
    logo: "S",
  },
  {
    id: "turkey-12",
    name: "Turkey 12 GB",
    days: 30,
    dataGb: 12,
    price: "$7.99",
    coverage: "Turkey",
    badge: "5G",
    logo: "N",
  },
];
