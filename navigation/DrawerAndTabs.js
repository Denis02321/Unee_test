import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from "../components/specific/CustomDrawer"
import MainTabs from "./MainTabs"
import { useTheme } from "@react-navigation/native"
import { GlobalStyles } from "../styles/GlobalStyles"

const Drawer = createDrawerNavigator()

export default function DrawerAndTabs(){
    
  const { colors } = useTheme()
  const styles = GlobalStyles(colors)

    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerType: 'front',
                drawerPosition: 'left',
                drawerStyle: {
                    backgroundColor: colors.background,
                    width: '80%',
                }
            }}
        >
            <Drawer.Screen name="MainTabs" component={MainTabs} />
        </Drawer.Navigator>
    )
}