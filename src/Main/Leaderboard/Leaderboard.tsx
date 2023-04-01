import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";

import { ListItem } from "../../Components/ListItem/ListItem";

import { FeedWorkout } from "../../Types/FeedWorkout";

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<FeedWorkout[]>([]);

  useEffect(() => {
    // Query for Leaderboard
  }, []);

  const renderItem = (listData: ListRenderItemInfo<FeedWorkout>) => {
    return <ListItem {...listData} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={leaderboard}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
