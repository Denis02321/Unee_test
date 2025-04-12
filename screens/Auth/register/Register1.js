import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../../styles/GlobalStyles"
import { Text, View } from "react-native"
import MyButton from "../../../components/common/MyButton"

export default function Register1() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <Text>Register screen 1</Text>
      <MyButton title='Next' onPress={() => navigation.navigate('Register2')} />
      <MyButton title='Cancel create account(Back to Login)' onPress={() => navigation.popTo('LoginStack')} />
    </View>
  )
}