import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F2F2',      
    },

    Title:{
        marginTop: '1%',
        paddingVertical: 10,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"       
    },
    Title2:{
        color:'#00f',
        fontSize: 25,
        paddingVertical: 10,
    },
    img:{
        marginTop:80,
        width:290,
        marginLeft:'15%',
        marginRight:'15%',
        resizeMode:'contain',

    },
    act:{
        flexDirection: 'row',
        marginLeft:'10%',
        marginRight:'10%',
        borderRadius: 10,
        marginTop:'2%',
        backgroundColor: "#0D0D0D"
    },
    checkbox:{

        marginTop:'2%',
        marginBottom:'2%',
        marginLeft:'5%',
        marginRight:'5%',
    },
    button:{
        padding:10,
        marginTop:'10%',
        marginLeft:'20%',
        marginRight:'20%',
    },
    
    buttonDel:{
        width: '50%',
        marginHorizontal: 50,
        marginVertical: 10,
    },
/*   

    
          borderRadius:130,
        borderWidth: 1,
        paddingto:10,
        marginTop:'10%',
        marginLeft:'20%',
        marginRight:'20%',
    */

})