import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function HomeScreen() {
  const { products, cartItems, cartCount, addToCart, removeFromCart } =
    useCart();

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ASIMIC TECH</Text>

        <Pressable
          style={styles.cartButton}
          onPress={() => router.push("/tabs/cart")}
        >
          <Text style={styles.cartButtonText}>View Cart ({cartCount})</Text>
        </Pressable>
      </View>

      <Text style={styles.heading}>Shop Quality Laptops</Text>

      <Text style={styles.subtitle}>Tech You Cherish</Text>

      {products.map((product) => {
        const quantityInCart =
          cartItems.find((item) => item.id === product.id)?.quantity ?? 0;

        return (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            specifications={product.specifications}
            imageUrl={product.imageUrl}
            quantityInCart={quantityInCart}
            onAddToCart={() => addToCart(product)}
            onRemoveFromCart={() => removeFromCart(product.id)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#008000",
  },

  cartButton: {
    backgroundColor: "#008000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  cartButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 15,
  },
});
