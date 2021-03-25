import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const ActionButton = (props) => {

  const {type, content, onPress} = props;
  const backgroundColor = type === 'primary' ? '#2a2a2a' : '#E8E8E8';
  const contentColor = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        style={[styles.actionButton, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.buttonText, {color: contentColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default ActionButton;
