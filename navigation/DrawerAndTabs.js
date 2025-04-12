import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from "../components/specific/CustomDrawer"
import MainTabs from "./MainTabs"

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
            <Drawer.Screen name="MainTabs" component={MainTabs} />
        </Drawer.Navigator>
    )
}