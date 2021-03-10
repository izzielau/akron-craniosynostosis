import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";

/* Our HomeScreen is a React Component. Remember, every component is just
    a function that takes in props and returns JSX. We usually use object
    destructuring to grab declare values we need from props right away.
*/
export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.tutorialTextContainer}>
        <Text style={styles.bodyTextSmallMargin}>
            Welcome to
        </Text>
        <Text style={styles.headerText}>
            Akron Children’s Hospital: Craniosynostosis App
        </Text>
        <Text style={styles.bodyText}>
            Think of this app as a way to "find a needle in a haystack."
        </Text>
        <Text style={styles.bodyText}>
            Many infants can develop irregular head shapes early in life, but
            only a very small number require urgent assessment by a physician.
            We want to make sure these infants are seen sooner rather than later.
        </Text>
        <Text style={styles.bodyText}>
            Other infants may not even require an in-person visit, saving families
            the hassle of a doctor's visit for something that would be considered
            normal. However, this will depend on the diagnosis and the quality of photos.
        </Text>
        <Text style={styles.bodyText}>
            By taking the time to capture the required photos of your child, you
            are not only helping to make your child's care more streamlined, you
            are also helping to ensure other children can also get assessed in a
            timely manner.
        </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Checklist")}
        >
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  );
}
