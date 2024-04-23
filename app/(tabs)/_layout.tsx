import { Tabs } from "expo-router";
import { theme } from "../../theme";
import { TabBarIcon } from "../../components/TabBarIcon";

const TabsLayout = () => {

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.primaryText,
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: theme.colors.background, borderBlockColor: theme.colors.background},
        tabBarActiveTintColor: theme.colors.primaryText,
        tabBarInactiveTintColor: theme.colors.secondaryText,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home", headerShown: false, tabBarIcon: (props) => <TabBarIcon {...props} type='home' /> }}
      />
      <Tabs.Screen
        name="expenses"
        options={{ headerTitle: "Expenses", title: "Expenses", tabBarIcon: (props) => <TabBarIcon {...props} type='expenses' /> }}
      />
      <Tabs.Screen
        name="reports"
        options={{ headerTitle: "Reports", title: "Reports", tabBarIcon: (props) => <TabBarIcon {...props} type='reports' /> }}
      />
      <Tabs.Screen name="add" options={{ headerTitle: "Add", title: "Add", tabBarIcon: (props) => <TabBarIcon {...props} type='add' /> }} />
      <Tabs.Screen
        name="settings"
        
        options={{ headerTitle: "Settings", title: "Settings", tabBarIcon: (props) => <TabBarIcon {...props} type='settings' /> }}
      />
    </Tabs>
  );
};

export default TabsLayout;
