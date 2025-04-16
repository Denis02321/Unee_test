import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../../styles/GlobalStyles"
import { Text, View } from "react-native"
import MyButton from "../../../components/common/MyButton"
import SafeScreen from "../../../components/common/SafeScreen"

export default function Register1() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  return (
    <SafeScreen style={styles.container}>
      <Text style={styles.text}>Register screen 1</Text>
      <MyButton title='Next' onPress={() => navigation.navigate('Register2')} />
      <MyButton title='Cancel create account(Back to Login)' onPress={() => navigation.popTo('LoginStack')} />
    </SafeScreen>
  )
}