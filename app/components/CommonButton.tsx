import React from "react";
import { ActivityIndicator,} from "react-native";
import { Button,} from "react-native-ui-lib";
import AppStyles from "../constants/AppStyles";

interface Props {
    onPress: any;
    title: string;
}

const CommonButton = ({onPress, title}: Props) => {
    return(
        <Button
        label={title}
        labelStyle={AppStyles.buttonlabel}
        style={AppStyles.button}
        onPress={onPress}
      />
    )
}

export default CommonButton;