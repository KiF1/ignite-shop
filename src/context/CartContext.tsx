import produce from "immer";
import { createContext, ReactNode, useState } from "react";

export interface IProduct{
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  numberPrice: string;
  description: string;
  priceId: string;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartItems:  IProduct[];
  cartQuantity: number;
  addProductToCart: (product: IProduct) => void;
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const cartQuantity = cartItems.length;

  function addProductToCart(product: IProduct) {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product);
      } else {
        console.log("o produto já existe no cart")
      }
    });
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addProductToCart }}>{children}</CartContext.Provider>
  );
}