import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

type TabBarIconProps = {
  color: string;
  size: number;
  type: "home" | "expenses" | "reports" | "add" | "settings";
};

export const TabBarIcon = ({ color, size, type }: TabBarIconProps) => {
  switch (type) {
    case "home":
      return <MaterialCommunityIcons name="home" size={size} color={color} />;
    case "reports":
      return <Feather name="bar-chart-2" size={size} color={color} />;
    case "expenses":
      return <FontAwesome5 name="money-bill" size={size} color={color} />;
    case "add":
      return <Ionicons name="add-circle" size={size} color={color} />;
    case "settings":
      return <Fontisto name="spinner-cog" size={size} color={color} />;
  }
};
