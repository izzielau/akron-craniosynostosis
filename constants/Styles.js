import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  tutorialContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
  },
  tutorialTextContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginBottom: 50
  },
  singleButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: "5%",
    marginBottom: 50
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#014590",
  },
  longButton: {
    height: 35,
    width: 225,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#014590",
  },
  whiteButton: {
    height: 35,
    width: 125,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  gallery: {
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  galleryFolder: {
    height: Dimensions.get('window').height / 7.5,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 25,
    marginTop: Dimensions.get('window').height / 75,
    marginBottom: Dimensions.get('window').height / 75,
    marginLeft: Dimensions.get('window').width / 25,
    marginRight: Dimensions.get('window').width / 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F0F0F7",
  },
  imageView: {
      height: "50%",
      width: "100%"
  },
  viewpointView: {
      height: "60%",
      width: "100%"
  },
  image: {
    flex: 1,
    width: "100%",
    height: null,
    marginBottom: 15,
    resizeMode: "cover",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 16,
    color: "white",
    alignItems: "center",
  },
  whiteButtonText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 16,
    color: "#014590",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 22,
    color: "#010420",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  bodyText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 16,
    color: "#9A9AB0",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  bodyTextSmallMargin: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 14,
    color: "#9A9AB0",
    alignItems: "center",
    width: "90%",
    marginBottom: 5,
  },
  bodyTextBold: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 14,
    color: "#9A9AB0",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
});

export { styles };
