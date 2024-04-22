import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const Settings = () =>  {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: "100%",
    paddingTop: 100,
    flexDirection: "row"
  },
  heading: {
    color: theme.colors.primaryText
  }
});

export default Settings;