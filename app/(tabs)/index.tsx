import { Link, router } from "expo-router";
import {  StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome back</Text>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: "100%",
    paddingTop: 100
  },
  heading: {
    color: theme.colors.primaryText
  }
});
