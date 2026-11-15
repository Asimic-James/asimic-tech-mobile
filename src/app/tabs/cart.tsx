import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const { cartItems, cartCount, totalPrice, removeFromCart, clearCart } =
    useCart();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Shopping Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.specifications}>{item.specifications}</Text>

              <Text style={styles.price}>
                ₦{item.price.toLocaleString("en-NG")}
              </Text>

              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>

              <Text style={styles.subtotal}>
                Subtotal: ₦
                {(item.price * item.quantity).toLocaleString("en-NG")}
              </Text>

              <Pressable
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.buttonText}>Remove One</Text>
              </Pressable>
            </View>
          ))}

          <View style={styles.summary}>
            <Text style={styles.total}>Total Items: {cartCount}</Text>

            <Text style={styles.total}>
              Total: ₦{totalPrice.toLocaleString("en-NG")}
            </Text>

            <Pressable style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.buttonText}>Clear Cart</Text>
            </Pressable>
          </View>
        </>
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

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 20,
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    color: "#666666",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  specifications: {
    color: "#666666",
    marginTop: 5,
  },

  price: {
    fontWeight: "bold",
    color: "#16A34A",
    marginTop: 8,
  },

  quantity: {
    marginTop: 5,
  },

  subtotal: {
    fontWeight: "bold",
    marginTop: 5,
  },

  summary: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  removeButton: {
    backgroundColor: "#DC2626",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  clearButton: {
    backgroundColor: "#DC2626",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
