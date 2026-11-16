import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import { useCart } from "../../context/CartContext";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const router = useRouter();

  const { products, cartItems, addToCart, removeFromCart } = useCart();

  const productId = Array.isArray(id) ? id[0] : id;

  const product = products.find(
    (item) => String(item.id) === String(productId),
  );

  const cartItem = cartItems.find(
    (item) => String(item.id) === String(productId),
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Product not found.</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.price}>₦{product.price.toLocaleString()}</Text>

        <Text style={styles.sectionTitle}>Specifications</Text>

        <Text style={styles.specifications}>{product.specifications}</Text>

        <View style={styles.cartControls}>
          <Pressable
            style={styles.quantityButton}
            onPress={() => removeFromCart(product.id)}
            disabled={!cartItem}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </Pressable>

          <Text style={styles.quantity}>{cartItem?.quantity ?? 0}</Text>

          <Pressable
            style={styles.quantityButton}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={() => addToCart(product)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>

        <Pressable
          style={styles.cartButton}
          onPress={() => router.push("/tabs/cart")}
        >
          <Text style={styles.cartButtonText}>View Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: 280,
    backgroundColor: "#F5F5F5",
  },

  details: {
    padding: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#008000",
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },

  specifications: {
    fontSize: 16,
    color: "#555555",
    marginTop: 10,
    lineHeight: 24,
  },

  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 20,
  },

  quantityButton: {
    backgroundColor: "#008000",
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  quantity: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#008000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  cartButton: {
    borderWidth: 1,
    borderColor: "#008000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  cartButtonText: {
    color: "#008000",
    fontSize: 16,
    fontWeight: "bold",
  },

  notFound: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
});
