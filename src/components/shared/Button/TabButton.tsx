import { AntDesign } from "@expo/vector-icons";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import styled from "styled-components/native";
import Colors from "@/root/src/constants/colors";
import { View } from "react-native";

const Container = styled.TouchableWithoutFeedback``;

interface BackgroundTypes {
  focused: boolean;
}

interface PropsTypes extends BottomTabBarButtonProps {
  label: string;
  name: "home" | "swap" | "clockcircleo" | "setting";
}

const Background = styled.View<BackgroundTypes>`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? Colors.white : Colors.background)};
  border-radius: 50px;
  margin: 10px;
`;

const Label = styled.Text`
  margin-left: 10px;
  font-family: "ms";
  font-size: 16px;
  color: ${Colors.darkGray};
  text-transform: capitalize;
`;

export const TabButton: React.FC<PropsTypes> = ({
  label,
  name,
  accessibilityState,
  onPress,
}) => {
  const focused = !!accessibilityState?.selected;
  const onPressHandler = (): void => {};
  return (
    <Container onPress={onPressHandler}>
      <Background>
        <AntDesign
          color={focused ? Colors.darkGray : Colors.whiteTab}
          name={name}
          size={24}
        />
        {focused && <Label>{label}</Label>}
      </Background>
    </Container>
  );
};
