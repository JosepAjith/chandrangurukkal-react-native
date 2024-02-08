import React from "react";
import { Button, Image, Text, View,} from "react-native-ui-lib";
import AppColors from "../constants/AppColors";
import AppStyles from "../constants/AppStyles";
import AppImages from "../constants/AppImages";
import { TouchableOpacity } from "react-native";

interface Props {
    onPress: any;
    title: string;
    bottom?: any;
}

const ButtonView = ({onPress, title, bottom}: Props) => {
    return(
        <TouchableOpacity style={[AppStyles.button1,{marginBottom:bottom}]} onPress={onPress}>
        <Image
          source={AppImages.USER}
          width={12}
          height={15}
          tintColor={AppColors.primary}
        />
        <Text style={AppStyles.buttonlabel1}>{title}</Text>
      </TouchableOpacity>
    )
}

export default ButtonView;