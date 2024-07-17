

import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CheckBox from 'react-native-check-box'
import styles from "../styles/loginStyles";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.loginHolder}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={email}
          onChangeText={setEmail}
          keyboardType="phone-pad"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={keepLoggedIn} onValueChange={setKeepLoggedIn}
          />
          <Text style={styles.checkboxText}>Keep me logged in</Text>
        </View>
        <TouchableOpacity
          style={styles.signinbtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("Signup")}
        >
          Don't have an account yet? Sign Up
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
