import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,1)',
      paddingTop: Constants.statusBarHeight,
    },
    title: {
      textAlign: 'left',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 5,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 5,
    },
    headerText: {
      fontFamily: 'Roboto-Bold',
      textAlign: 'left',
      fontSize: 18,
      fontWeight: '700',
      padding: 10,
      color: 'rgba(104,107,126,1)',
    },
    content: {
      color: 'rgba(154,154,176,1)',
      fontWeight: '700',
      fontSize: 16,
      padding:20,
    },
    active: {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },
  });
  