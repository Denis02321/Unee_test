import { useNavigation } from "@react-navigation/native"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import { GlobalStyles } from "../../styles/GlobalStyles"

export default function GetStarted() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <Text>Get Started</Text>
      <MyButton title='Login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
