import { Pressable, StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Details</Text>

      <Text style={styles.productId}>Product ID: {id}</Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#15803D",
  },

  productId: {
    fontSize: 18,
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#15803D",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
