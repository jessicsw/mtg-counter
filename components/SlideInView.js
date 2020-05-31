import React, { useState, useEffect } from "react";
import { Text, View, Animated } from "react-native";
import { screenWidth } from "../helper/dimensions";

const SlideInView = (props) => {
  const [positionValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(positionValue, {
      toValue: 1,
      duration: 200,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          {
            translateX: positionValue.interpolate({
              inputRange: [0, 1],
              outputRange: [screenWidth, 0],
            }),
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default SlideInView;
