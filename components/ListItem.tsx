import React, { useMemo } from "react";
import { Text, Pressable, StyleSheet, ReactNode } from "react-native";
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
}: ListItemProps): ReactNode => {
  const item = useMemo(() => (
    <Pressable
      style={[
        styles.listPressable,
        !!detail ? styles.withDetail : styles.withoutDetail,
      ]}
      onPress={onClick}
      disabled={!onClick}
    >
      <Text style={[styles.listPressableText, isDestructive ? styles.listPressableDestruct : {}]}>{label}</Text>
      {detail}
    </Pressable>
  ), [label, detail, onClick, isDestructive]);

  if (swipeToDelete) {
    return (
      <Swipeable
        renderRightActions={() => (
          <Pressable style={styles.listPressableDelete} onPress={onDelete}>
            <Text style={styles.text}>Delete</Text>
          </Pressable>
        )}
      >
        {item}
      </Swipeable>
    );
  }

  return item;
};

const styles = StyleSheet.create({
  listPressable: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 44,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primaryText,
    backgroundColor: theme.colors.background,
  },
  withDetail: {
    justifyContent: "space-between",
  },
  withoutDetail: {
    justifyContent: "flex-start",
  },
  listPressableText: {
    fontSize: 16,
    color: theme.colors.primaryText
  },
  listPressableDestruct: {
    color: theme.colors.error
  },
  listPressableDelete: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  text: {
    color: theme.colors.primaryText,
  },
});
