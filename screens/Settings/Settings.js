import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Switch, Text, View } from "react-native"
import useStore from "../../store/Store"
import SafeScreen from "../../components/common/SafeScreen"

export default function Settings() {
  const navigation = useNavigation()

  const toggleTheme = useStore(state => state.toggleTheme)
  const currentTheme = useStore(state => state.theme)

  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

  return (
    <SafeScreen 
      style={styles.container}
    >
      <Text style={{color: colors.text}}>Settings</Text>
      <Text style={{color: colors.text}}>current theme: {currentTheme}</Text>
      <Switch value={currentTheme==='dark'?true:false} onChange={toggleTheme} />
      <MyButton title='Back' onPress={()=> navigation.goBack()} />
    </SafeScreen>
  )
}