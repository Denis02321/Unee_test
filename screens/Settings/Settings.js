import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Switch, Text, View } from "react-native"
import useStore from "../../store/Store"

export default function Settings() {
  const navigation = useNavigation()

  const toggleTheme = useStore(state => state.toggleTheme)
  const currentTheme = useStore(state => state.theme)

  return (
    <View style={GlobalStyles.container}>
      <Text>Settings</Text>
      <Text>current theme: {currentTheme}</Text>
      <Switch onChange={toggleTheme} />
      <MyButton title='Back' onPress={()=> navigation.goBack()} />
    </View>
  )
}