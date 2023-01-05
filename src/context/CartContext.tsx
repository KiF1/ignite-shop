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
  checkIfProductAlreadyInCart: (product: string) => boolean;
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const cartQuantity = cartItems.length;

  function addProductToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function checkIfProductAlreadyInCart(productId: string){
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addProductToCart, checkIfProductAlreadyInCart }}>{children}</CartContext.Provider>
  );
}