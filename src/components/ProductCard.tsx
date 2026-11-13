import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ProductCardProps = {
  name: string;
  price: number;
  specifications: string;
  imageUrl: string;
  onAddToCart: () => void;
};

export default function ProductCard({
  name,
  price,
  specifications,
  imageUrl,
  onAddToCart,
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

      <Pressable onPress={onAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
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

  button: {
    backgroundColor: "#16A34A",
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
