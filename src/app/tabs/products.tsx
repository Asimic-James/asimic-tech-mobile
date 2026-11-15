import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function ProductsScreen() {
  const { products, cartItems, addToCart, removeFromCart } = useCart();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchText = searchQuery.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.specifications.toLowerCase().includes(searchText)
    );
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Products</Text>
        <Text style={styles.subtitle}>Find the right laptop for you.</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search laptops by name or specs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <Text style={styles.resultText}>
        {filteredProducts.length} product(s) found
      </Text>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
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
        })
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No products found</Text>

          <Text style={styles.emptyMessage}>
            Try searching with a different name or specification.
          </Text>
        </View>
      )}
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
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#008000",
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginTop: 5,
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  resultText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },

  emptyContainer: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },

  emptyMessage: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
  },
});
