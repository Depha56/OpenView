// import { StyleSheet, Platform } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#002D72",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: "500",
//     color: "white",
//   },
//   subtext: {
//     fontSize: 15,
//     fontWeight: "5",
//     color: "white",
//     marginTop: 20,
//     textAlign: "center",
//     paddingHorizontal: 40,
//     opacity: 0.7,
//   },
//   btn: {
//     backgroundColor: "transparent",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 50,
//     width: "40%",
//     alignSelf: "center",
//     borderWidth: 0.3,
//     borderColor: "#646464",
//     // Shadow for iOS
//     ...Platform.select({
//       ios: {
//         shadowColor: "#737373",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.4,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 4, // Shadow for Android
//       },
//     }),
//   },
// });


import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002D72",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  subtext: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 40,
    opacity: 0.7,
  },
  btn: {
    backgroundColor: "#002D72",
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    width: "50%",
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    ...Platform.select({
      ios: {
        shadowColor: "#ffffff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
        shadowColor: "#ffffff",
      },
    }),
  },
  btnText: {
    textAlign: "center",
    width: "100%",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
