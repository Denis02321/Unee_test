import { createDrawerNavigator } from "@react-navigation/drawer"
import Feed from "../screens/MainTabs/Feed"
import CustomDrawer from "../components/specific/CustomDrawer"

const Drawer = createDrawerNavigator()

export default function DrawerAndTabs(){
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerType: 'front',
                drawerPosition: 'left'
            }}
        >
            <Drawer.Screen name="MainTabs" component={Feed} />
        </Drawer.Navigator>
    )
}