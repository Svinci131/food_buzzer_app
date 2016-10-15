// import { StyleSheet } from 'react-native';
const darkGreen = '#E86B18';
const lightGreen = '#80DEEA';
const medGreen = "#082744";
const inputBorder = '#EFEFEF';
const stylesObj = {
    body: {
        alignSelf: 'stretch',
        height: 5000,
    },
    smallHeader: {
        fontSize: 30,
        color: medGreen,
        textAlign: 'center',
        marginTop: 10,
    },
    logo: {
        backgroundColor: inputBorder,
        fontSize: 40,
        height: 100,
        color: medGreen,
        textAlign: 'center',
        paddingTop: 30,
        marginBottom: 10
    },
    button: {
        backgroundColor: medGreen,
        marginBottom: 7,
        marginLeft: 30,
        padding: 10,
        width: 300,
        height: 40
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    help: {
        backgroundColor: medGreen,
        alignSelf: 'stretch',
        height: 800,
        paddingTop: 200
    },
    list: {
      
        alignSelf: 'stretch',
        flex: 1,
        paddingTop: 20,
        paddingBottom: 30
    },
    listTitle: {
        fontWeight: 'bold',
        color: medGreen,
    }, 
    loading: {
        color: medGreen,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,

    },
    listText: {
        // backgroundColor: '#fff',
        color: medGreen,
        // textAlign: 'center
        //padding: 6,
        margin: 2,
        alignSelf: 'flex-start',
        width: 200,
    },
    listText2: {
        // backgroundColor: '#fff',
        color: medGreen,
        // textAlign: 'center
        //padding: 6,
        margin: 2,
        alignSelf: 'flex-start',
        width: 200,
    },
    tagline: {
        color: medGreen,
        textAlign: 'center'
    },
    profileComp: { flex: 1, flexDirection: 'row', margin:10, justifyContent: 'space-around'},
    imgView: { width: 100, height: 100, backgroundColor: medGreen, justifyContent: 'center', alignItems: 'center' },
    userDetails: { width: 250, height: 100, padding: 5},
    name: { fontSize: 20, fontWeight: 'bold', color: '#039BE5',marginLeft: 50},
    //headline: { fontSize: 16, marginVertical: 5, color: '#039BE5',marginLeft: 50},
    text: { fontSize: 12, color: '#039BE5',marginLeft: 50 },

    headline3: {fontSize: 24, color: medGreen, textAlign: "center", marginBottom: 30},
    headline1: { fontSize: 40, marginVertical: 30, color: medGreen, textAlign: "center"},
    billing: {
       alignItems: 'center',
   },
   invoice: {
       width: 500, 
       height: 100,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: inputBorder
   },
   userInfo: {
       marginTop: 30,
   },
   userInfo2: {
       marginTop: 5,
   },
   cardInfo: {
       marginTop: 5,
   },
   inputName: {
       width: 300,
       height: 28,
       marginTop: 5,
       borderWidth: 1,
       borderColor: inputBorder,
       borderRadius: 3
   },
   expiration: {
       flexDirection: 'row',
       marginTop: 5,
       marginBottom: 15
   },
   inputNum: {
       height: 28,
       marginTop: 5,
       borderWidth: 1,
       borderColor: inputBorder,
       borderRadius: 3,
       width: 40
   },
   success: {
       alignSelf: 'center',
       justifyContent: 'center',
       alignItems: 'center',
       height: 100,
       width: 280,
       marginTop: 220,
       borderWidth: 1,
       borderRadius: 3,
       backgroundColor: medGreen,
       borderColor: medGreen,
   }
}

export { stylesObj }
