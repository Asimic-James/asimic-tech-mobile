import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useCart } from "@/context/CartContext";

export default function CartScreen() {
  const { cartItems, cartCount, totalPrice, removeFromCart, clearCart } =
    useCart();

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString("en-NG")}`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Shopping Cart</Text>

      <Text style={styles.subtitle}>{cartCount} item(s) in your cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>

          <Text style={styles.emptyMessage}>
            Add laptops and gadgets to your cart to get started.
          </Text>
        </View>
      ) : (
        <>
          {cartItems.map((item) => {
            const subtotal = item.price * item.quantity;

            return (
              <View key={item.id} style={styles.card}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>

                  <Text style={styles.specifications}>
                    {item.specifications}
                  </Text>

                  <Text style={styles.unitPrice}>
                    Unit Price: {formatPrice(item.price)}
                  </Text>

                  <Text style={styles.quantity}>Quantity: {item.quantity}</Text>

                  <Text style={styles.subtotal}>
                    Subtotal: {formatPrice(subtotal)}
                  </Text>
                </View>

                <Pressable
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove One</Text>
                </Pressable>
              </View>
            );
          })}

          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Order Summary</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Items</Text>

              <Text style={styles.summaryValue}>{cartCount}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Amount</Text>

              <Text style={styles.totalPrice}>{formatPrice(totalPrice)}</Text>
            </View>

            <Pressable style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Clear Cart</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 20,
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  emptyMessage: {
    color: "#666666",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  productInfo: {
    marginBottom: 12,
  },

  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  specifications: {
    color: "#666666",
    marginBottom: 8,
  },

  unitPrice: {
    fontSize: 14,
    marginBottom: 5,
  },

  quantity: {
    fontSize: 14,
    marginBottom: 5,
  },

  subtotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000",
  },

  removeButton: {
    backgroundColor: "#FEE2E2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  removeButtonText: {
    color: "#DC2626",
    fontWeight: "bold",
  },

  summary: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  summaryLabel: {
    fontSize: 16,
    color: "#555555",
  },

  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
  },

  clearButton: {
    backgroundColor: "#DC2626",
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },

  clearButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
