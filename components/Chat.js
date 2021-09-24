import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      // mock data
      messages: [
        {
          _id: 4,
          text: "Hello!",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: this.props.route.params.name,
          },
        },
        {
          _id: 3,
          text: this.props.route.params.name + " has joined the chat!",
          createdAt: new Date(),
          system: true,
        },
        {
          _id: 2,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 1,
          text: "Chatbot has joined the chat!",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  renderBubble(props) {
    let bgColor = this.props.route.params.bgColor;
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          // user
          right: {
            backgroundColor: bgColor,
          },
          // random chatter
          left: {
            backgroundColor: "#555",
          },
        }}
      />
    );
  }

  // adding new messages to 'message' array
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    let name = this.props.route.params.name;
    // let bgColor = this.props.route.params.bgColor;
    return (
      <View style={styles.chatContainer}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* fixing issue for hidden keyboard */}
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  chatContainer: {
    flex: 1,
    backgroundColor: "#222",
  },

  backContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

  back: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(255, 255, 255, .3)",
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});