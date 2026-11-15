import { createContext, useContext, useState, type ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  specifications: string;
  imageUrl: string;
};

export type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  products: Product[];
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

const products: Product[] = [
  {
    id: 1,
    name: "HP EliteBook 840 G5",
    price: 350000,
    specifications: "Core i5 | 8GB RAM | 256GB SSD",
    imageUrl: "https://placehold.co/400x300/png",
  },
  {
    id: 2,
    name: "Dell Latitude 7490",
    price: 320000,
    specifications: "Core i5 | 8GB RAM | 256GB SSD",
    imageUrl: "https://placehold.co/400x300/png",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    price: 380000,
    specifications: "Core i5 | 16GB RAM | 512GB SSD",
    imageUrl: "https://placehold.co/400x300/png",
  },
];

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  let cartCount = 0;
  let totalPrice = 0;

  for (const item of cartItems) {
    cartCount += item.quantity;
    totalPrice += item.price * item.quantity;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
