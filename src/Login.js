import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  StackNavigator,
} from 'react-navigation';
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Content,
  Left,
  Icon,
  Right
} from "native-base";
import Styles from "./Styles";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Title>Willkommen!</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Image style={styles.image} source={require("../res/logo.png")} />
          <TextInput
            placeholder="E-Mail"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TextInput
            placeholder="Passwort"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    height: 90,
    justifyContent: "center",
    resizeMode: "contain",
    alignSelf:'center'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color:'#FFF',
    margin: 10
  },
  buttonContainer: {
    backgroundColor: '#a09f01',
    margin: 10,
    padding: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '800'
  },
  content: {
    backgroundColor: '#373737'
  },
  header: {
    backgroundColor: '#4f4e4e'
  }
});
