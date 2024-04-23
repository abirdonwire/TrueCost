import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import { ListItem } from "../../components/ListItem";

const Settings = () => {
  return (
    <View style={styles.container}>
      <ListItem
        label="Categories"
        detail={
          <Entypo name="chevron-thin-right" color={theme.colors.primaryText} />
        }
        onClick={() => {}}
        onDelete={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: "100%",
    width: "100%",    
  },
  heading: {
    color: theme.colors.primaryText,
  },
});

export default Settings;
