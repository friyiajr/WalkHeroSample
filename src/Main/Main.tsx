import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { FeedNav } from "./Feed/FeedNav";

const Tab = createBottomTabNavigator();

import Ionicons from "@expo/vector-icons/Ionicons";

export const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Leaderboard") {
            iconName = "analytics-outline" as const;
          } else {
            iconName = "newspaper-outline" as const;
          }
          return (
            <Ionicons
              name={iconName}
              size={25}
              color={focused ? "purple" : "grey"}
            />
          );
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNav}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
};
