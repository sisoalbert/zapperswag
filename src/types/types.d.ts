export type cartState = {
  quantity: number;
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
  quantity?: number | undefined;
}

export interface StateType {
  cart: {
    cartList: {
      map: arr;
      id: number;
      name: string | undefined;
      price: string | undefined;
      imageSrc?: string | undefined;
    };
  };
}

export interface uiStateType {
  ui: {
    cartDrawerVisible: boolean;
  };
}
