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

export type ShoppingType = {
  products: ProductType[];
  cart: ProductType[];
  categories: string[];
  overviewItem: ProductType[];
  onToggleOverview: boolean;
  onToggleAddItem: boolean;
  addProduct: (item: ProductType) => void;
  addToCart: (item: ProductType) => void;
  removeFromCart: (item: ProductType) => void;
  addToOverview: (item: ProductType) => void;
  isControlToggleOverview: (item: boolean) => void;
  isControlToggleAddItem: () => void;
  toggleCartCompleted: (id: string) => void;
};

const DefaultShopping: ShoppingType = {
  products: [],
  cart: [],
  categories: [],
  overviewItem: [],
  onToggleOverview: false,
  onToggleAddItem: false,
  addProduct: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  addToOverview: () => {},
  isControlToggleOverview: () => {},
  isControlToggleAddItem: () => {},
  toggleCartCompleted: () => {},
};

const Shopping = React.createContext(DefaultShopping);

type ResponseType = undefined | ProductType[];

const Provider: React.FC<{}> = (props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [overviewItem, setOverviewItem] = useState<ProductType[]>([]);
  const [onToggleOverview, setOnToggleOverview] = useState<boolean>(false);
  const [onToggleAddItem, setOnToggleAddItem] = useState<boolean>(false);

  const addProduct: ShoppingType["addProduct"] = useCallback(
    (item) => {
      setProducts([...products, item]);
    },
    [products]
  );

  const toggleCartCompleted: ShoppingType["toggleCartCompleted"] = useCallback(
    (id) => {
      const mappedCard = cart.map((el) => {
        if (id === el._id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      });
      setCart(mappedCard);
    },
    [cart]
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
        }
      });
      if (!alreadyInCart) {
        //if there is not the product, add to cart
        cartItem.push({ ...item, count: 1 });
      }
      setCart(cartItem);
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
        overviewItem,
        onToggleOverview,
        onToggleAddItem,
        addProduct,
        addToCart,
        removeFromCart,
        addToOverview,
        isControlToggleOverview,
        isControlToggleAddItem,
        toggleCartCompleted,
      }}
    >
      {props.children}
    </Shopping.Provider>
  );
};

export { Provider, Shopping };
