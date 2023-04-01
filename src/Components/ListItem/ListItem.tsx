import { format } from "date-fns";
import React from "react";

import {
  StyleSheet,
  View,
  Text,
  ListRenderItemInfo,
  Pressable,
} from "react-native";
import { FeedWorkout } from "../../Types/FeedWorkout";

export const ListItem = (
  listData: ListRenderItemInfo<FeedWorkout> & { onPress?: (id: number) => void }
) => {
  const formatDate = (unixTime: number) => {
    const date = new Date(unixTime);
    return format(date, "MMM do, h:mm:ss a");
  };

  let titleText = listData.item?.date
    ? formatDate(listData.item.date)
    : listData.item.name;

  const onPressHandler = () => {
    if (listData.onPress) {
      listData.onPress(listData.item?.date);
    }
  };

  return (
    <Pressable style={styles.listItem} onPress={onPressHandler}>
      {listData.item?.name && (
        <Text style={styles.rankText}>{listData.index + 1}</Text>
      )}
      <Text style={styles.listItemDateText}>{titleText}</Text>
      <View>
        <Text style={styles.stepsText}>
          {listData.item.steps.toLocaleString()}
        </Text>
        <Text style={styles.stepsLabel}>STEPS</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    height: 200,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  listItemDateText: {
    fontWeight: "bold",
  },
  stepsText: {
    textAlign: "center",
    fontSize: 15,
    fontStyle: "italic",
  },
  stepsLabel: {
    textAlign: "center",
    fontWeight: "bold",
  },
  rankText: {
    fontWeight: "300",
    fontSize: 35,
  },
});
