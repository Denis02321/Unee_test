import { NavigationContainer } from "@react-navigation/native"
import { shrinkAndSlideFromRight, transitionConfig } from "./navigation/transitions"
import AuthStack from "./navigation/AuthStack"
import DrawerAndTabs from "./navigation/DrawerAndTabs"
import { createStackNavigator } from "@react-navigation/stack"
import Settings from "./screens/Settings/Settings"
import Profile from "./screens/Profile/Profile"
import { DarkTheme } from "./theme/darkTheme"
import { LightTheme } from "./theme/lightTheme"
import useStore from "./store/Store"
import { StatusBar } from "react-native"
import { primaryColor } from "./constants/constants"
import StatusBarCustom from "./components/common/StatusBarCustom"

const Stack = createStackNavigator()

export default function App() {

  const currentTheme = useStore((state) => state.theme)

  return (
    <>
    <StatusBarCustom />
    <NavigationContainer theme={currentTheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: shrinkAndSlideFromRight,
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig,
          },
        }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="DrawerAndTabs" component={DrawerAndTabs} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
