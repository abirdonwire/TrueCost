import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/expenses">Expenses</Link>
      <Pressable onPress={() => router.push("/expenses")}>
        <Text>Expenses Too</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
