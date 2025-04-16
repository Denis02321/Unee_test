import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import SafeScreen from "../../components/common/SafeScreen"

export default function Profile() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  return (
    <SafeScreen style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <MyButton title='Back' onPress={()=> navigation.goBack()} />
    </SafeScreen>
  )
}