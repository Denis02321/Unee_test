import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../common/MyButton"

export default function CustomDrawer({navigation}){

    const handleNavigation = (screen)=>{
        navigation.closeDrawer()
        navigation.navigate(screen)
    }

    return (
        <View style={GlobalStyles.container}>
            <MyButton title='Settings' onPress={()=> handleNavigation('Settings')} />
            <MyButton title='Profile' onPress={()=> handleNavigation('Profile')} />
        </View>
    )
}