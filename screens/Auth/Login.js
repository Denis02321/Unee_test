import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import SafeScreen from "../../components/common/SafeScreen"

export default function Login() {
  const navigation = useNavigation()
  
  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  return (
    <SafeScreen style={styles.container}>
      <MyButton title='Login now' onPress={() => navigation.navigate('DrawerAndTabs')} />
      <MyButton title='Create account' onPress={() => navigation.navigate('Register')} />
      <MyButton title='Back to GetStarted' onPress={() => navigation.goBack()} />
    </SafeScreen>
  )
}