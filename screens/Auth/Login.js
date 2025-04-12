import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"

export default function Login() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <MyButton title='Login now' onPress={() => navigation.navigate('DrawerAndTabs')} />
      <MyButton title='Create account' onPress={() => navigation.navigate('Register')} />
      <MyButton title='Back to GetStarted' onPress={() => navigation.goBack()} />
    </View>
  )
}