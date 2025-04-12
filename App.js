import { NavigationContainer } from "@react-navigation/native"
import { shrinkAndSlideFromRight, transitionConfig } from "./navigation/transitions"
import AuthStack from "./navigation/AuthStack"
import DrawerAndTabs from "./navigation/DrawerAndTabs"
import { createStackNavigator } from "@react-navigation/stack"
import Settings from "./screens/Settings/Settings"
import Profile from "./screens/Profile/Profile"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
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
  )
}
