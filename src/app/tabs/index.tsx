import { Alert, ScrollView, StyleSheet } from "react-native";

import ProductCard from "@/components/ProductCard";

export default function HomeScreen() {
  const handleAddToCart = () => {
    Alert.alert("ASIMIC TECH", "Product added to cart!");
  };

  return (
    <ScrollView style={styles.container}>
      <ProductCard
        name="HP EliteBook 840 G5"
        price={350000}
        specifications="Core i5 | 8GB RAM | 256GB SSD"
        imageUrl="https://placehold.co/400x300/png"
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        name="Dell Latitude 7490"
        price={320000}
        specifications="Core i5 | 8GB RAM | 256GB SSD"
        imageUrl="https://placehold.co/400x300/png"
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        name="Lenovo ThinkPad T480"
        price={380000}
        specifications="Core i5 | 16GB RAM | 512GB SSD"
        imageUrl="https://placehold.co/400x300/png"
        onAddToCart={handleAddToCart}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
