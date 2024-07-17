// import React from "react";
// import { View, Text, Button, Image } from "react-native";
// import styles from "../styles/homeStyles";
// import { TouchableOpacity } from "react-native-web";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/images/homeImage.png")}
//         style={styles.image}
//       />
//       <Text style={styles.text}>Navigate with Ease</Text>
//       <Text style={styles.subtext}>
//         Effortlessly Efficient City Travel, With Maps, Weather, Traffic Updates,
//         Parking, and More
//       </Text>
//       <TouchableOpacity
//         style={styles.btn}
//         title="Get Started"
//         onPress={() => navigation.navigate("Login")}
//       >
//         <Text style={{textAlign:"center", width: "100%",color:"#ffffff"}}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;


import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/homeStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/homeImage.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Navigate with Ease</Text>
      <Text style={styles.subtext}>
        Effortlessly Efficient City Travel, With Maps, Weather, Traffic Updates,
        Parking, and More
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
