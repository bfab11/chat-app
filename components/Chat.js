import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let name = this.props.route.params.name;
    let bgColor = this.props.route.params.bgColor;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
        }}
      >
        {name ? (
          <Text>Tell me more about yourself, {name}!</Text>
        ) : (
          <Text>What was your name again?</Text>
        )}
      </View>
    );
  }
}