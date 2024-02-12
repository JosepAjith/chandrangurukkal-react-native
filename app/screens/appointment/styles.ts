import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';
import AppFonts from '../../constants/AppFonts';

export const styles = StyleSheet.create({
  heading: {
    color: AppColors.green,
    fontSize: 24,
    fontFamily: AppFonts.LATO_MEDIUM,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    fontFamily: AppFonts.LATO_REGULAR,
    color: AppColors.black,
    marginBottom:20
  },
  title: {
    fontSize: 18,
    fontFamily: AppFonts.LATO_BOLD,
    color: AppColors.whitish,
  },
  itemView: {
    height: 100,
    justifyContent: 'flex-end',
    padding: 10,
    marginVertical: 6,
  },
  rectangle:{
    height:54,
    borderWidth:1,
    borderColor:AppColors.stroke,
    backgroundColor:AppColors.fill,
    borderRadius:5,
    flexDirection:'row',
    paddingHorizontal:20,
    marginTop:20
  },
  label:{
    fontSize:12,
    fontFamily:AppFonts.LATO_REGULAR,
    color:AppColors.lightGrey
  },
  value:{
    fontSize:16,
    fontFamily:AppFonts.LATO_REGULAR,
    color:AppColors.darkGrey
  },
  cardView:{
    borderWidth:1,
    borderColor:'#DFDFDF',
    backgroundColor:'rgba(7,109,57,0.05)',
    borderRadius:10,
    padding:14,
    marginVertical:20,
    marginRight:20
 },
 details:{
        fontSize: 20,
        fontFamily: AppFonts.LATO_BOLD,
        color: AppColors.green,
        paddingVertical:10
 },
 text:{
    fontSize:12,
    fontFamily:AppFonts.LATO_REGULAR,
    color:AppColors.black
  },
  text1:{
    fontSize:16,
    fontFamily:AppFonts.LATO_MEDIUM,
    color:AppColors.black,
    marginTop:5
  },
});
