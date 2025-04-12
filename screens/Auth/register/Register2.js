import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../../styles/GlobalStyles"
import { Text, View } from "react-native"
import MyButton from "../../../components/common/MyButton"

export default function Register2() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <Text>Register screen 2</Text>
      <MyButton title='Next' onPress={() => navigation.navigate('Register3')} />
            <MyButton title='Back to screen 1' onPress={() => navigation.goBack()} />
      <MyButton title='Cancel create account(Back to Login)' onPress={() => navigation.popTo('LoginStack')} />
    </View>
  )
}