import { useNavigation, useTheme } from "@react-navigation/native"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import { GlobalStyles } from "../../styles/GlobalStyles"

export default function GetStarted() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)
  return (
    <View style={styles.container}>
      <Text>Get Started</Text>
      <MyButton title='Login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
