import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
  count: number;
}

export type ShoppingType = {
  products: ProductType[];
  cart: ProductType[];
  categories: string[];
  onToggleOverview: boolean;
  onToggleAddItem: boolean;
  addProduct: (item: ProductType) => void;
  addToCart: (item: ProductType) => void;
  removeFromCart: (item: ProductType) => void;
  isControlToggleOverview: () => void;
  isControlToggleAddItem: () => void;
};

const DefaultShopping: ShoppingType = {
  products: [],
  cart: [],
  categories: [],
  onToggleOverview: false,
  onToggleAddItem: false,
  addProduct: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  isControlToggleOverview: () => {},
  isControlToggleAddItem: () => {},
};

const Shopping = React.createContext(DefaultShopping);

type ResponseType = undefined | ProductType[];

const Provider: React.FC<{}> = (props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [onToggleOverview, setOnToggleOverview] = useState<boolean>(false);
  const [onToggleAddItem, setOnToggleAddItem] = useState<boolean>(false);

  const addProduct: ShoppingType["addProduct"] = useCallback(
    (item) => {
      setProducts([...products, item]);
    },
    [products]
  );

  const addToCart: ShoppingType["addToCart"] = useCallback(
    (item) => {
      const cartItem = cart.slice();
      //check!! is there already product in cart if add to cart the product
      let alreadyInCart = false;
      cartItem.forEach((el) => {
        if (el._id === item._id) {
          el.count++;
          alreadyInCart = true;
          console.log("ok");
        }
      });
      if (!alreadyInCart) {
        //if there is not the product, add to cart
        cartItem.push({ ...item, count: 1 });
      }

      setCart([...cartItem]);
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

  const isControlToggleOverview: ShoppingType["isControlToggleOverview"] = () => {
    setOnToggleOverview(!onToggleOverview);
    setOnToggleAddItem(false);
  };
  const isControlToggleAddItem: ShoppingType["isControlToggleAddItem"] = () => {
    setOnToggleAddItem(!onToggleAddItem);
    setOnToggleOverview(false);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Shopping.Provider
      value={{
        products,
        cart,
        categories,
        onToggleOverview,
        onToggleAddItem,
        addProduct,
        addToCart,
        removeFromCart,
        isControlToggleOverview,
        isControlToggleAddItem,
      }}
    >
      {props.children}
    </Shopping.Provider>
  );
};

export { Provider, Shopping };
