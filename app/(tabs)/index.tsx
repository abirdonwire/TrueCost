import { Link, router } from "expo-router";
import {  StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/expenses">Expenses</Link>
     
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
