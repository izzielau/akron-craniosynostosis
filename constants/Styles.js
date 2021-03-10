import { StyleSheet } from "react-native";

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
    alignItems: "flex-end",
    marginTop: "80%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    backgroundColor: "#0085FF",
  },
  imageView: {
      height: "50%",
      width: "100%"
  },
  tutorialImage: {
    flex: 1,
    width: "100%",
    height: null,
    marginBottom: 15,
    resizeMode: "cover",
  },
  image: {
    justifyContent: "center",
    height: 500,
    width: "100%",
    resizeMode: "contain",
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
  tutorialHeaderText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 18,
    color: "#686B7E",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },
  tutorialBodyText: {
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 14,
    color: "#9A9AB0",
    alignItems: "center",
    width: "90%",
  },
});

export { styles };
