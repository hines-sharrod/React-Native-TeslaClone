import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from './styles'
import ActionButton from "../ActionButton";

const CarItem = (props) => {

  const {name, tagline, taglineCTA, image} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.carImage}
        source={image}
      />
      <View style={styles.titles}>
        <Text style={styles.carTitle}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} 
          {' '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <ActionButton 
        type="primary" 
        content='Custom Order' 
        onPress={() => {
          console.warn('Custom Order button pressed');
        }}
      />
      
      <ActionButton 
        type="secondary" 
        content='Exisiting Inventory' 
        onPress={() => {
          console.warn('Existing Inventory button pressed');
        }}
      />
    </View>
  );
};

export default CarItem;
