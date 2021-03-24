import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const ActionButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        style={styles.actionButton}
        onPress={() => {
          alert('Button clicked')
        }}
      >
        <Text style={styles.buttonText}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default ActionButton;
