import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Product Details</Text>
      <Text>Product ID: {id}</Text>
    </View>
  );
}
