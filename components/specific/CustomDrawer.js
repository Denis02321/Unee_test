import { useNavigation, useTheme } from "@react-navigation/native"
import { View } from "react-native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../common/MyButton"

export default function CustomDrawer({navigation}){

    const handleNavigation = (screen)=>{
        navigation.closeDrawer()
        navigation.navigate(screen)
    }
    
    const { colors } = useTheme()
    const styles = GlobalStyles(colors)

    return (
        <View style={styles.container}>
            <MyButton title='Settings' onPress={()=> handleNavigation('Settings')} />
            <MyButton title='Profile' onPress={()=> handleNavigation('Profile')} />
        </View>
    )
}