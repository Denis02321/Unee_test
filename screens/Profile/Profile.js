import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"

export default function Profile() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.container}>
      <Text>Profile</Text>
      <MyButton title='Back' onPress={()=> navigation.goBack()} />
    </View>
  )
}