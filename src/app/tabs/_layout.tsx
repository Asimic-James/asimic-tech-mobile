import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008000",
        tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />

      <Tabs.Screen name="products" options={{ title: "Products" }} />

      <Tabs.Screen name="cart" options={{ title: "Cart" }} />

      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
