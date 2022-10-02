export type cartState = {
  quantity: number;
  id: number;
  name: string | undefined;
  price: number;
  imageSrc: string | undefined;
};

export interface ItemType {
  id: number;
  name: string | undefined;
  price: number;
  imageSrc?: string | undefined;
}

export interface StateType {
  cart: {
    reduce: arr;
    map: arr;
    id: number;
    name: string | undefined;
    price: number;
    imageSrc?: string | undefined;
    quantity: number;
  };
}

export interface uiStateType {
  ui: {
    cartDrawerVisible: boolean;
  };
}
