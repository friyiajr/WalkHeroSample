import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

import { FeedWorkout } from "../../Types/FeedWorkout";
import { CTAButton } from "../../Components/CTAButton/CTAButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ListItem } from "../../Components/ListItem/ListItem";
import { StatusBar } from "expo-status-bar";

export const Feed = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const [feed, setFeed] = useState<FeedWorkout[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [limit, setLimit] = useState(5);

  useEffect(() => {
    // Load all the workouts on the user's profile
  }, [limit]);

  const goToWorkout = () => {
    nav.push("ActiveWorkout");
  };

  const onPress = async (id: number) => {
    // Delete on Press
  };

  const renderItem = (listData: ListRenderItemInfo<FeedWorkout>) => {
    return <ListItem {...listData} onPress={onPress} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="purple" />
      <FlatList
        data={feed}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
      <View style={styles.buttonContainer}>
        <CTAButton variant="primary" title="START WALK" onPress={goToWorkout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
