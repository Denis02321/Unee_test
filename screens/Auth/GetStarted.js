import { useNavigation, useTheme } from "@react-navigation/native"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import SafeScreen from "../../components/common/SafeScreen"

export default function GetStarted() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)
  
  return (
    <SafeScreen style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
      <MyButton title='Login' onPress={() => navigation.navigate('Login')} />
    </SafeScreen>
  )
}
