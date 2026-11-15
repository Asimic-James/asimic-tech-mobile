import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ASIMIC TECH</Text>

      <Text style={styles.description}>Welcome to your profile.</Text>

      <Text style={styles.description}>
        Manage your account and shopping preferences.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
});
