import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// import {
//   addStepChangedListener,
//   startSendingData,
//   stopSendingData,
// } from "expo-sample-pedometer";

const Steps = ({
  submitForCompletion,
}: {
  submitForCompletion: (steps: number) => void;
}) => {
  const [numOfSteps, setNumOfSteps] = useState(0);

  useEffect(() => {
    // const sub = addStepChangedListener(({ step }) => {
    //   setNumOfSteps(step);
    // });
    // return () => {
    //   stopSendingData();
    //   sub.remove();
    // };
  }, []);

  const submit = async () => {
    submitForCompletion(numOfSteps);
  };

  return (
    <>
      <View style={styles.bottomTimer}>
        <Text style={styles.timerLabel}>Steps</Text>
        <Text style={styles.timerFont}>{numOfSteps}</Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={submit}>
        <Text style={styles.buttonText}>DONE</Text>
      </TouchableOpacity>
    </>
  );
};

export const ActiveWorkout = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    // startSendingData();
  }, []);

  const saveWorkout = async (steps: number, currentUser: string) => {
    // Add Save WorkoutQuery Here
  };

  const updateLeaderboard = async (steps: number, currentUser: string) => {
    // Add update leaderboard logic here
  };

  const submitForCompletion = async (steps: number) => {
    // Grab the user and save the workout to the DB
    nav.goBack();
  };

  const formatTimeString = (rawSeconds: number) => {
    const seconds = rawSeconds % 60;
    const minutes = Math.floor(rawSeconds / 60) % 60;
    const hours = Math.floor(minutes / 60) % 60;

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.topTimer}>
        <Text style={styles.timerLabel}>Time</Text>
        <Text style={styles.timerFont}>{formatTimeString(time)}</Text>
      </View>
      <Steps submitForCompletion={submitForCompletion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  topTimer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  bottomTimer: {
    flex: 1.2,
    justifyContent: "center",
    borderTopWidth: 1,
  },
  timerFont: {
    fontSize: 70,
    textAlign: "center",
    fontWeight: "100",
  },
  timerLabel: {
    textAlign: "center",
    fontSize: 50,
    marginBottom: 10,
  },
  buttonStyle: {
    position: "absolute",
    bottom: 30,
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
