import React from "react";
import { Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type CustomDrawerProps = DrawerContentComponentProps & {
  HideRoutes?: string[];
};

export function CustomDrawer(props: CustomDrawerProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Comp1</Text>
      <DrawerItemList {...props} />
      <Text>Comp1</Text>
    </DrawerContentScrollView>
  );
}
