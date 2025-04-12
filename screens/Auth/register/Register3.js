import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../../styles/GlobalStyles"
import { Text, View } from "react-native"
import MyButton from "../../../components/common/MyButton"

export default function Register3() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <Text>Register screen 3</Text>
      <MyButton title='Finish(Go to Home)' onPress={() => navigation.navigate('DrawerAndTabs')}/>
      <MyButton title='Back to screen 2' onPress={() => navigation.goBack()} />
      <MyButton title='Cancel create account(Back to Login)' onPress={() => navigation.popTo('LoginStack')} />
    </View>
  )
}