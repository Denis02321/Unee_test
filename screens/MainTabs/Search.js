import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Text, View } from "react-native"

export default function Search() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search(Explore)</Text>
    </View>
  )
}