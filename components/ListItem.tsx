import Reac, { useMemo } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { theme } from "../theme/";

type ListItemProps = {
  label: string;
  detail?: React.ReactNode;
  onClick?: () => void;
  swipeToDelete?: boolean;
  onDelete?: () => void;
  isDestructive: boolean;
};

export const ListItem = ({
  label,
  detail,
  onClick,
  swipeToDelete,
  onDelete,
  isDestructive,
}: ListItemProps) => {
  const item = useMemo(() => {
    <Pressable>
      <Text>{label}</Text>
      {detail}
    </Pressable>;
  }, [label, detail]);

  return !swipeToDelete ? (
    item
  ) : (
    <Swipeable
      renderRightActions={() => (
        <Pressable style={styles.listPressable}>
          <Text style={styles.text}>Delete</Text>
        </Pressable>
      )}
    ></Swipeable>
  );
};

const styles = StyleSheet.create({
  listPressable: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  text: {
    color: theme.colors.primaryText,
  },
});
