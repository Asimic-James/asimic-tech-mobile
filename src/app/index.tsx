import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const handleAddToCart = () => {
    Alert.alert("ASIMIC GLOBAL TECH", "Product added to cart!");
  };

  const categories = ["Laptops", "Monitors", "Accessories"];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>ASIMIC GLOBAL TECH</Text>
          <Text style={styles.tagline}>Tech You Cherish Service You Trust</Text>
        </View>

        <Text style={styles.cart}>🛒</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcome}>
        <Text style={styles.heading}>Find Your Next Laptop</Text>
        <Text style={styles.description}>
          Quality laptops. Affordable prices.
        </Text>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((category) => (
          <Pressable
            key={category}
            style={styles.categoryButton}
            onPress={() => Alert.alert("Category", category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </Pressable>
        ))}
      </View>

      {/* Products */}
      <Text style={styles.sectionTitle}>Featured Laptops</Text>

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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  brand: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#16A34A",
  },

  tagline: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  cart: {
    fontSize: 25,
  },

  welcome: {
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  description: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  categoryButton: {
    backgroundColor: "#E8F5E9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  categoryText: {
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginBottom: 10,
    color: "#111827",
  },
});
