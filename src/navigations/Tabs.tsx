import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Home } from "@/root/src/components/screens/Home";
import { Settings } from "@/root/src/components/screens/Settings";
import { TransactionSummary } from "@/root/src/components/screens/TransactionSummary";
import Colors from "@/root/src/constants/colors";

const Tab = createBottomTabNavigator();

export const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          height: 75,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={TransactionSummary} name="Transaction" />
      <Tab.Screen component={Settings} name="Settings" />
    </Tab.Navigator>
  );
};
