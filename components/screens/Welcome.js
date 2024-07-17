
// import React, { useEffect } from "react";
// import { View, Image, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import styles from "../styles/welcomeStyles";

// const WelcomeScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace("Home");
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/images/logo-web.png")}
//         style={styles.image}
//       />
//       <Text style={styles.text}>
//         OPEN VIEW
//       </Text>
//       <View style={styles.powered}>
//         <Text style={styles.poweredText}>Powered by</Text>
//         <Image
//           source={require("../../assets/images/poweredImage.png")}
//           style={styles.poweredImage}
//         />
//       </View>
//     </View>
//   );
// };

// export default WelcomeScreen;

import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/welcomeStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo-web.png")}
        style={styles.image}
      />
      <Text style={styles.text}>OPEN VIEW</Text>
      <View style={styles.powered}>
        <Text style={styles.poweredText}>Powered by</Text>
        <Image
          source={require("../../assets/images/poweredImage.png")}
          style={styles.poweredImage}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
