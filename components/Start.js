import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", bgColor: "#757083" };
  }
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../assets/backgroundImage.png")}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Chat</Text>
          <View style={styles.container}>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.textInputIcon}
                source={require("../assets/icon.svg")}
              />
              <TextInput
                style={styles.textInput}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Tell me your name!"
                placeholderTextColor="rgba(117, 112, 131, .5)"
              />
            </View>
            <View style={styles.colorPickerContainer}>
              <Text style={styles.chooseColor}>Choose Your Background:</Text>
              <View style={styles.colorPicker}>
                <TouchableOpacity
                  //#090C08; #474056; #8A95A5; #B9C6AE
                  style={[styles.colors, styles.black]}
                  onPress={() => this.setState({ bgColor: "#FF8674" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[styles.colors, styles.purple]}
                  onPress={() => this.setState({ bgColor: "#474056" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[styles.colors, styles.gray]}
                  onPress={() => this.setState({ bgColor: "#8A95A5" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[styles.colors, styles.green]}
                  onPress={() => this.setState({ bgColor: "#B9C6AE" })}
                ></TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.startChatting,
                  { backgroundColor: this.state.bgColor },
                ]}
                onPress={() =>
                  this.props.navigation.navigate("Chat", {
                    name: this.state.name,
                    bgColor: this.state.bgColor,
                  })
                }
              >
                <Text style={styles.buttonText}>Chat Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    letterSpacing: 3,
    color: "#fff",
    position: "absolute",
    top: 100,
  },
  container: {
    width: "88%",
    height: 320,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textInputContainer: {
    flex: 1,
    width: "88%",
  },
  textInput: {
    top: 25,
    height: 60,
    borderColor: "#090C08",
    borderWidth: 2,
    fontSize: 16,
    fontWeight: "300",
    paddingLeft: 45,
  },
  textInputIcon: {
    position: "absolute",
    top: 45,
    left: 15,
  },
  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  startChatting: {
    flex: 1,
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#757083",
    width: "88%",
    height: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#000",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  colorPickerContainer: {
    position: "absolute",
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: 22,
  },
  colorPicker: {
    flexDirection: "row",
    marginTop: 15,
  },
  colors: {
    width: 45,
    height: 45,
    marginRight: 20,
    borderRadius: 45 / 2,
  },
  black: {
    backgroundColor: "#FF8674",
  },
  purple: {
    backgroundColor: "#474056",
  },
  gray: {
    backgroundColor: "#8A95A5",
  },
  green: {
    backgroundColor: "#B9C6AE",
  },
  //#090C08; #474056; #8A95A5; #B9C6AE
});