import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useCallback, useEffect, useState } from "react";

import { ApiProduct, getProducts } from "@/services/productService";

export default function ProductsScreen() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProducts();
  }, [loadProducts]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#008000" />

        <Text style={styles.message}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>

        <Pressable
          style={styles.retryButton}
          onPress={() => void loadProducts()}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products Catalog</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.title}</Text>

            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>

            <Text style={styles.price}>${item.price.toFixed(2)} USD</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.message}>No products found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 15,
  },

  message: {
    fontSize: 16,
    color: "#666666",
    marginTop: 10,
  },

  errorText: {
    color: "#DC2626",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },

  retryButton: {
    backgroundColor: "#008000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },

  retryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  productName: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },

  price: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#008000",
  },
});
