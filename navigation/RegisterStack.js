import { createStackNavigator } from "@react-navigation/stack"
import { transitionConfig, shrinkAndSlideFromRight } from "./transitions"
import Register1 from '../screens/Auth/register/Register1'
import Register2 from '../screens/Auth/register/Register2'
import Register3 from '../screens/Auth/register/Register3'

const Stack = createStackNavigator()

export default function RegisterStack() {
    return (
      <Stack.Navigator 
        initialRouteName='Register1'
        screenOptions={{
          cardStyleInterpolator: shrinkAndSlideFromRight,
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig
          }
        }}>
        <Stack.Screen name="Register1" component={Register1} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
      </Stack.Navigator>
    )
  }