import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Profile } from "../screens/Profile";
import { Topics } from "../screens/Topics";
import { HiddenScreenA } from "../screens/HiddenScreenA";
import { HiddenScreenB } from "../screens/HiddenScreenB";

import { CustomDrawer } from "../components/CustomDrawer";

export function DrawerRoutes() {
  const { Screen, Navigator } = createDrawerNavigator();

  return (
    <Navigator
      drawerContent={(props) => (
        <CustomDrawer
          {...props}
          HideRoutes={["HiddenScreenA", "HiddenScreenB"]}
        />
      )}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="Topics" component={Topics} />

      <Screen name="HiddenScreenA" component={HiddenScreenA} />
      <Screen name="HiddenScreenB" component={HiddenScreenB} />
    </Navigator>
  );
}
