import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
  visible: boolean;
  count: number;
  completed: boolean;
}

export interface HistoryType {
  _id: string;
  name: string;
  listItem: ProductType[];
  completed: boolean;
  createdAt: Date;
  pieces: number;
}

export type ShoppingType = {
  products: ProductType[];
  cart: ProductType[];
  categories: string[];
  overviewItem: ProductType[];
  onToggleOverview: boolean;
  onToggleAddItem: boolean;
  onTogglePopUp: boolean;
  history: HistoryType[];
  addProduct: (item: ProductType) => void;
  addToCart: (item: ProductType, count?: number) => void;
  removeFromCart: (item: ProductType) => void;
  addToOverview: (item: ProductType) => void;
  isControlToggleOverview: (item: boolean) => void;
  isControlToggleAddItem: () => void;
  isControlPopUpToggle: () => void;
};

const DefaultShopping: ShoppingType = {
  products: [],
  cart: [],
  categories: [],
  overviewItem: [],
  onToggleOverview: false,
  onToggleAddItem: false,
  onTogglePopUp: false,
  history: [],
  addProduct: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  addToOverview: () => {},
  isControlToggleOverview: () => {},
  isControlToggleAddItem: () => {},
  isControlPopUpToggle: () => {},
};

const Shopping = React.createContext(DefaultShopping);

type ResponseType = undefined | ProductType[];
type ResponseType2 = undefined | HistoryType[];

const Provider: React.FC<{}> = (props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [overviewItem, setOverviewItem] = useState<ProductType[]>([]);
  const [onToggleOverview, setOnToggleOverview] = useState<boolean>(false);
  const [onToggleAddItem, setOnToggleAddItem] = useState<boolean>(false);
  const [onTogglePopUp, setOnTogglePopUp] = useState<boolean>(false);
  const [history, setHistories] = useState<HistoryType[]>([]);

  const addProduct: ShoppingType["addProduct"] = useCallback(
    (item) => {
      setProducts([...products, item]);
    },
    [products]
  );

  const addToCart: ShoppingType["addToCart"] = useCallback(
    (item, count) => {
      let cartItems = [...cart];
      const itemCount = count ? count : 1;
      //check!! is there already product in cart if add to cart the product
      const insideCartItem = cartItems.find((cartItem) => {
        return cartItem._id === item._id;
      });

      if (!insideCartItem) {
        //if there is not the product, add to cart
        cartItems = [...cartItems, { ...item, count: itemCount }];
      } else {
        cartItems = cartItems.map((i) =>
          i._id === item._id
            ? { ...insideCartItem, count: itemCount + insideCartItem.count }
            : i
        );
      }
      setCart(cartItems);
    },
    [cart]
  );

  const removeFromCart: ShoppingType["removeFromCart"] = useCallback(
    (item) => {
      const filtered = cart.filter((i) => item._id !== i._id);
      setCart(filtered);
    },
    [cart]
  );

  const addToOverview: ShoppingType["addToOverview"] = useCallback(
    (item) => {
      if (overviewItem.length > 1) {
        overviewItem.pop();
      } else {
        setOverviewItem([item]);
      }
    },
    [overviewItem]
  );

  const isControlToggleOverview: ShoppingType["isControlToggleOverview"] = useCallback(
    (item) => {
      setOnToggleOverview(item);
      setOnToggleAddItem(false);
    },
    []
  );
  const isControlToggleAddItem: ShoppingType["isControlToggleAddItem"] = () => {
    setOnToggleAddItem(!onToggleAddItem);
    setOnToggleOverview(false);
  };

  const isControlPopUpToggle: ShoppingType["isControlPopUpToggle"] = () => {
    setOnTogglePopUp(!onTogglePopUp);
  };

  const fetchData = async () => {
    const newProducts: ResponseType = await Axios.get(`/api/products`)
      .then((res) => res.data)
      .catch((e) => {
        console.log(e);
      });

    if (!newProducts) return;

    const productCategories = newProducts.reduce<string[]>((state, cur) => {
      const { category } = cur;
      const isInState = state.includes(category);
      if (isInState) {
        return state;
      }
      return [...state, category];
    }, []);

    setCategories(productCategories);
    setProducts(newProducts);
  };

  const getHistory = async () => {
    const newHistories: ResponseType2 = await Axios.get("/api/histories")
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setHistories(newHistories);
  };

  useEffect(() => {
    fetchData();
    getHistory();
  }, [products]);

  return (
    <Shopping.Provider
      value={{
        products,
        cart,
        categories,
        overviewItem,
        onToggleOverview,
        onToggleAddItem,
        onTogglePopUp,
        history,
        addProduct,
        addToCart,
        removeFromCart,
        addToOverview,
        isControlToggleOverview,
        isControlToggleAddItem,
        isControlPopUpToggle,
      }}
    >
      {props.children}
    </Shopping.Provider>
  );
};

export { Provider, Shopping };
