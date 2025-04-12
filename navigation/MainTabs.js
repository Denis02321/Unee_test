import { Octicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { primaryColor, SCREENWIDTH } from "../constants/constants"
import Feed from "../screens/MainTabs/Feed"
import Search from "../screens/MainTabs/Search"
import Chats from "../screens/MainTabs/Chats"
import Communities from "../screens/MainTabs/Communities"
import Post from "../screens/MainTabs/Post"

const Tab = createBottomTabNavigator()

export default function MainTabs(){

    const tabScreens = [
        {
          name: 'Feed',
          component: Feed,
          activeIcon: <Octicons name="home" size={24} color={primaryColor} />,
          inactiveIcon: <Octicons name="home" size={24} color="#888" />,
        },
        {
          name: 'Search',
          component: Search,
        //   activeIcon: <FontAwesome name="search" size={22} color={primaryColor} />,
        //   inactiveIcon: <Feather name="search" size={22} color="#888" />,
          activeIcon: <Octicons name="home" size={24} color={primaryColor} />,
          inactiveIcon: <Octicons name="home" size={24} color="#888" />,
        },
        {
          name: 'Post',
          component: Post,
        //   activeIcon: <MaterialCommunityIcons name="toolbox" size={26} color={primaryColor} />,
        //   inactiveIcon: <MaterialCommunityIcons name="toolbox-outline" size={26} color="#888" />,
          activeIcon: <Octicons name="home" size={24} color={primaryColor} />,
          inactiveIcon: <Octicons name="home" size={24} color="#888" />,
        },
        {
          name: 'Chats',
          component: Chats,
        //   activeIcon: <FontAwesome6 name="envelope" size={22} color={primaryColor} />,
        //   inactiveIcon: <FontAwesome name="envelope" size={20} color="#888" />,
        activeIcon: <Octicons name="home" size={24} color={primaryColor} />,
        inactiveIcon: <Octicons name="home" size={24} color="#888" />,
          badgeCount: 3,
        },
        {
          name: 'Communities',
          component: Communities,
        //   activeIcon: <Octicons name="bell-fill" size={22} color={primaryColor} />,
        //   inactiveIcon: <Octicons name="bell" size={22} color="#888" />,
          activeIcon: <Octicons name="home" size={24} color={primaryColor} />,
          inactiveIcon: <Octicons name="home" size={24} color="#888" />
        },
        // {
        //   name: 'Profile',
        //   component: Profile,
        //   activeIcon: <FontAwesome5 name="user-alt" size={22} color={primaryColor} />,
        //   inactiveIcon: <FontAwesome5 name="user" size={22} color="#888" />,
        // },
      ]

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 60,
                    width: SCREENWIDTH,
                    borderRadius: 10,
                    marginBottom: 10,
                },
                tabBarItemStyle:{
                    justifyContent:'center',
                    alignItems:'center',
                },
            }}
        >
            {tabScreens.map((tabScreen, index) => (
                <Tab.Screen
                    key={index}
                    name={tabScreen.name}
                    component={tabScreen.component}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return focused ? tabScreen.activeIcon : tabScreen.inactiveIcon
                            // return (
                            //     // a component that wraps the icon and adds ripple effect
                            // )
                        },
                        // tabBarBadge: tabScreen.badgeCount || null,
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}