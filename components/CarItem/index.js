import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from './style'
import ActionButton from "../ActionButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.carImage}
        source={require("../../assets/images/ModelX.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.carTitle}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <ActionButton />
    </View>
  );
};

export default CarItem;
