import { createStackNavigator } from "@react-navigation/stack"
import { transitionConfig, shrinkAndSlideFromRight } from "./transitions"
import GetStarted from '../screens/Auth/GetStarted'
import Login from '../screens/Auth/Login'

const Stack = createStackNavigator()

export default function LoginStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          cardOverlayEnabled: true,
          cardShadowEnabled: true,
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig
          }
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            cardStyleInterpolator: shrinkAndSlideFromRight
        }}
        />
      </Stack.Navigator>
    )
  }
  