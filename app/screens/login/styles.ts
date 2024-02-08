import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';
import AppFonts from '../../constants/AppFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: AppColors.white,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical:80
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignSelf:'center'
  },
  privacyPolicy: {
    textAlign: 'center',
    fontSize: 10,
    color: AppColors.grey,
    fontFamily:AppFonts.LATO_REGULAR
  },
  fieldStyle: {
    borderWidth: 1,
    borderColor: AppColors.stroke,
    backgroundColor: AppColors.fill,
    width: '100%',
    borderRadius: 5,
    height: 40,
    fontFamily:AppFonts.LATO_REGULAR
  },
  buttonlabel: {
    color: AppColors.black,
    fontSize: 16,
    marginLeft:10,
    fontFamily:AppFonts.LATO_MEDIUM
  },
  button: {
    backgroundColor: 'F7F7F7',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: AppColors.stroke,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
  },
  or: {
    color: 'black',
    fontSize: 14,
    paddingVertical:30,
    fontFamily:AppFonts.LATO_REGULAR
  },
  title: {
    fontSize: 22,
    color: AppColors.black,
    marginBottom:40,
    fontFamily:AppFonts.LATO_BOLD
  },
  text:{
    fontFamily:AppFonts.LATO_REGULAR,
    fontSize:16,
    color:'#3A3A3A'
  }
});

export default styles;
