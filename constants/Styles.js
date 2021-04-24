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
    height: 35,
    width: 125,
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
    backgroundColor: "#F0F0F7",
  },
  gallery: {
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  galleryFolder: {
    // flex: 1,
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 25,
    margin: 15,
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
    fontWeight: "600",
    fontSize: 14,
    color: "white",
    alignItems: "center",
  },
  whiteButtonText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 14,
    color: "#9A9AB0",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 18,
    color: "#686B7E",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  bodyText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 14,
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
  carouselContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});

export { styles };
