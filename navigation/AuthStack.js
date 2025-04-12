import { createStackNavigator } from "@react-navigation/stack"
import { transitionConfig, slideFromBottom } from "./transitions"
import LoginStack from './LoginStack'
import RegisterStack from './RegisterStack'

const Stack = createStackNavigator()

export default function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig
          }
        }}
      >
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen 
          name="Register" 
          component={RegisterStack} 
          options={{
            cardStyleInterpolator: slideFromBottom
          }}
        />
      </Stack.Navigator>
    )
  }