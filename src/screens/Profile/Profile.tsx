import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          backgroundColor: "#cecece",
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text> ProfilePage </Text>

        <Button
          onPress={() => {
            navigation.navigate("HiddenScreenA");
          }}
          title="HiddenScreenA"
        />
        <Button
          onPress={() => {
            navigation.navigate("HiddenScreenB");
          }}
          title="HiddenScreenB"
        />
      </View>
    </>
  );
}
