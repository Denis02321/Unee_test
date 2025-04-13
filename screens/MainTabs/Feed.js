import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import useStore from "../../store/Store"

export default function Feed() {
  const navigation = useNavigation()


  const currentTheme = useStore(state => state.theme)

  return (
    <View style={GlobalStyles.container}>
      <Text>Feed</Text>
      <Text>current theme: {currentTheme}</Text>
    </View>
  )
}