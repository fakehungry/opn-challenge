export type Charity = {
  id: number;
  name: string;
  image: string;
  currency: string;
};

export type Payment = {
  id: number;
  charitiesId: number;
  amount: number;
  currency: string;
};
