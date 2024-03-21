import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "Home", title: "Home "}}/>
      <Tabs.Screen name="expenses" options={{ headerTitle: "Expenses", title: "Expenses" }} />
    </Tabs>
  );
};

export default TabsLayout;
