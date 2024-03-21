import { Tabs } from "expo-router";
import { theme } from "../../theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "orange",
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarLabelStyle: { color: theme.colors.textSecondary },
        tabBarIcon: ({ color }) => <Ionicons color={color} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home " }}
      />
      <Tabs.Screen
        name="expenses"
        options={{ headerTitle: "Expenses", title: "Expenses" }}
      />
      <Tabs.Screen
        name="reports"
        options={{ headerTitle: "Reports", title: "Reports" }}
      />
      <Tabs.Screen name="add" options={{ headerTitle: "Add", title: "Add" }} />
      <Tabs.Screen
        name="settings"
        options={{ headerTitle: "Settings", title: "Settings" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
