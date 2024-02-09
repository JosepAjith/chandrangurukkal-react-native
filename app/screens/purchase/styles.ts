import { StyleSheet } from "react-native";
import AppColors from "../../constants/AppColors";
import AppFonts from "../../constants/AppFonts";

export const styles = StyleSheet.create({
    heading:{
        color:AppColors.green,
        fontSize:24,
        fontFamily:AppFonts.LATO_MEDIUM,
        marginBottom:20
    },
    cardView:{
        borderColor:'#E4E4E4',
        borderWidth:1,
        borderRadius:10,
        marginBottom:10
    },
    smallView:{
        width:90,
        height:30,
        backgroundColor:'rgba(87, 87, 87, 0.32)',
        borderWidth:1,
        borderColor:'#BABABA',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
     },
     statusText: {
        fontSize:14,
        fontFamily: AppFonts.LATO_MEDIUM,
        color:AppColors.white
     },
     chip:{
        position: 'absolute',
        left: 15,
        right: 0,
        top: 15
     },
     image:{
        width: '100%', height: 130,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
     },
     line:{
        borderLeftColor:AppColors.black, borderLeftWidth:1,
        marginHorizontal:6,
        height:14
     },
     title:{
        color:AppColors.green,
        fontSize:16,
        fontFamily:AppFonts.LATO_MEDIUM,
    },
    text:{
        color:AppColors.black,
        fontSize:12,
        fontFamily:AppFonts.LATO_MEDIUM,
    },
})