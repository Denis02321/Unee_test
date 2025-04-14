import { useNavigation, useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/GlobalStyles"
import MyButton from "../../components/common/MyButton"
import { Switch, Text, View } from "react-native"
import useStore from "../../store/Store"

export default function Settings() {
  const navigation = useNavigation()

  const toggleTheme = useStore(state => state.toggleTheme)
  const currentTheme = useStore(state => state.theme)

  const { colors } = useTheme()

  return (
    <View 
      // style={GlobalStyles.container}
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{color: colors.text}}>Settings</Text>
      <Text style={{color: colors.text}}>current theme: {currentTheme}</Text>
      <Switch value={currentTheme==='dark'?true:false} onChange={toggleTheme} />
      <MyButton title='Back' onPress={()=> navigation.goBack()} />
    </View>
  )
}