import React from "react";
import { View, Text, ImageBackground, buttonGroup } from "react-native";

import styles from './styles'
import ActionButton from "../ActionButton";

const CarItem = (props) => {

  const {name, tagline, taglineCTA, image, buttonGroup} = props.car;

  function InventoryButtons() {
    if (buttonGroup === 'cars') {
      return (
        <View>
          <ActionButton 
            type='primary'
            content='Custom Order'
            onPress={() => {
              console.warn('Custom Order button pressed');
            }}
          />
        
          <ActionButton 
            type='secondary'
            content='Existing Inventory'
            onPress={() => {
              console.warn('Existing Inventory button pressed');
            }}
          />
        </View>
      )
    } else {
      return (
        <View>
          <ActionButton 
            type='primary'
            content='Order Now'
            onPress={() => {
              console.warn('Order Now button pressed');
            }}
          />
        
          <ActionButton 
            type='secondary'
            content='Learn More'
            onPress={() => {
              console.warn('Learn More button pressed');
            }}
          />
        </View>
      )
    }
  }

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

      <InventoryButtons />
    </View>
  );
};

export default CarItem;
