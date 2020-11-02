import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
}

export type ShoppingType = {
  products: ProductType[];
  cart: ProductType[];
  categories: string[];
  addProduct: (item: ProductType) => void;
  addToCart: (item: ProductType) => void;
  removeFromCart: (item: ProductType) => void;
};

const DefaultShopping: ShoppingType = {
  products: [],
  cart: [],
  categories: [],
  addProduct: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
};

const Shopping = React.createContext(DefaultShopping);

type ResponseType = undefined | ProductType[];

const Provider: React.FC<{}> = (props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const addProduct: ShoppingType["addProduct"] = useCallback(
    (item) => {
      setProducts([...products, item]);
    },
    [products]
  );

  const addToCart: ShoppingType["addToCart"] = useCallback(
    (item) => {
      setCart([...cart, item]);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Shopping.Provider
      value={{
        products,
        cart,
        categories,
        addProduct,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </Shopping.Provider>
  );
};

export { Provider, Shopping };
