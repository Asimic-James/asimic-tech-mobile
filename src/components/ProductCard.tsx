import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ProductCardProps = {
  name: string;
  price: number;
  specifications: string;
  imageUrl: string;
  quantityInCart: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
};

export default function ProductCard({
  name,
  price,
  specifications,
  imageUrl,
  quantityInCart,
  onAddToCart,
  onRemoveFromCart,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.specifications}>{specifications}</Text>

      <Text style={styles.price}>₦{price.toLocaleString("en-NG")}</Text>

      {quantityInCart > 0 && (
        <Text style={styles.quantity}>In Cart: {quantityInCart}</Text>
      )}

      <Pressable onPress={onAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {quantityInCart > 0 && (
        <Pressable onPress={onRemoveFromCart} style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove One</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    margin: 10,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 160,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#111827",
  },

  specifications: {
    color: "#666666",
    marginTop: 5,
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#16A34A",
    marginTop: 10,
  },

  quantity: {
    color: "#15803D",
    fontWeight: "600",
    marginTop: 8,
  },

  button: {
    backgroundColor: "#16A34A",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },

  removeButton: {
    backgroundColor: "#DC2626",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
