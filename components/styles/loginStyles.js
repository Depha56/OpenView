
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  imageHolder: {
    width: "100%",
  },
  image: {
    width: "100%",
    objectFit: "fill",
  },
  loginHolder: {
    marginBottom: 100,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  signinbtn: {
    marginTop: 20,
    backgroundColor: "#002D72",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignSelf: "center",
    boxShadow: "0px 4px 4px #737373",
    border: "0.30px #646464 solid",
  },
  signinText: {
    textAlign: "center",
    width: "100%",
    color: "#ffffff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
  },
  signupText: {
    marginTop: 20,
    color: "black",
    alignSelf: "center",
    textDecorationLine: "none",
  },
});
