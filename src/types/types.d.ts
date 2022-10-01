export type cartState = {
  id: number;
  name: string | undefined;
  price: string | undefined;
  imageSrc: string | undefined;
};

export interface ItemType {
  id: number;
  name: string | undefined;
  price: string | undefined;
  imageSrc?: string | undefined;
}

export interface StateType {
  cart: {
    id: number;
    name: string | undefined;
    price: string | undefined;
    imageSrc?: string | undefined;
  };
}
