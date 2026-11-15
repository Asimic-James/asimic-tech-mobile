import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CartProvider from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="dark" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="tabs" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="product/[id]" />
      </Stack>
    </CartProvider>
  );
}
