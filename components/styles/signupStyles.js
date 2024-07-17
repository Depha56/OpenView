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
  signupHolder: {
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 9,
  },
  button: {
    width: "40%",
    padding: 10,
    backgroundColor: "#002D72",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 20,
    alignSelf: "center",
    boxShadow: "0px 4px 4px #737373",
    border: "0.30px #646464 solid",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  loginText: {
    color: "black",
    marginTop: 20,
  },
});
