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
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#014590",
  },
  longButton: {
    height: 50,
    width: 250,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#014590",
  },
  whiteButton: {
    height: 50,
    width: 150,
    alignItems: "center",
   // marginTop: 40,
    //marginBottom: 20,
    justifyContent: "center",
    borderColor: "#014590",
    borderWidth: 1,
    borderRadius:10
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
  lightcontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingLeft: 10,
    alignItems: "center"
  },
  box: {
    marginTop: 20,
    width: 80,
    height: 80,
    
  },
  row: {
      flexDirection: "row",
  },

  failrow: {
    flexDirection: "row",
    width: "95%",
    height: 85,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#9A9AB0",
    borderWidth: 0.4
},
  
lightCheckFailbox: {
  width: 40, 
  height: 40,
  justifyContent: "flex-start",
  marginRight: 15,
  marginTop: 10
},

titleText: {
    fontFamily: "Avenir",
    fontWeight: "700",
    fontSize: 15,
    color: "#010420",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    width: "90%",
    marginTop:20
    
  }
 
});

export { styles };
