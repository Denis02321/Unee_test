import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"
import useStore from "../../store/Store"

export default function Feed() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  const currentTheme = useStore(state => state.theme)

  return (
    <View 
      style={styles.container}
      >
      <Text style={styles.text}>Feed</Text>
      <Text style={styles.text}>current theme: {currentTheme}</Text>
    </View>
  )
}