
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002D72",
  },
  image: {
    width: 150, 
    height: 150, 
    marginBottom: 20, 
  },
  text: {
    fontSize: 35,
    fontWeight:"300",
    color: "white",
    marginBottom: 20,
    
  },
  powered: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  poweredText: {
    color: "white",
    marginRight: 5,
  },
  poweredImage: {
    width: 150,
    height: 50,
  },
});
