import React from 'react';
import { View, Text } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth } from '../styles';

const Card = ({ title }) => (
  <View
    style={{
      width: sliderItemWidth,
      height: 150,
      paddingHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gold',
    }}
  >
    <View
      style={{
        width: slideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </View>
  </View>
);

export default Card;
