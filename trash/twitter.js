/*

src/
├── navigation/
│   ├── MainNavigator.js       # Root navigator
│   ├── DrawerNavigator.js     # Side drawer
│   ├── BottomTabNavigator.js  # Main tabs
│   ├── AuthStack.js           # Authentication flow
│   ├── HomeStack.js           # Nested home screens
│   └── ...
├── components/
│   ├── CustomDrawer.js        # Custom drawer component
│   ├── TabBarIcon.js          # Tab bar icons
│   └── ...
├── screens/
│   ├── Home/
│   ├── Explore/
│   ├── Notifications/
│   ├── Messages/
│   ├── Profile/
│   └── ...
└── ...

*/

// main navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

// drawer navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileStack from './ProfileStack';
import SettingsScreen from '../screens/Account/Settings';
import BookmarksScreen from '../screens/Account/Bookmarks';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: { width: '85%' }
      }}
    >
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
    </Drawer.Navigator>
  );
}


// bottom navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Explore, Notifications, Messages } from '../screens';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon route={route} focused={focused} />
        ),
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

// custom drawer component
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
        <Text>Bookmarks</Text>
      </TouchableOpacity>
      {/* More drawer items */}
    </View>
  );
}

// tab bar icons component
import { View } from 'react-native';
import { HomeIcon, SearchIcon, BellIcon, MailIcon } from './Icons';

export default function TabBarIcon({ route, focused }) {
  const iconColor = focused ? '#1DA1F2' : 'gray';
  
  return (
    <View style={styles.container}>
      {route.name === 'Home' && <HomeIcon color={iconColor} />}
      {route.name === 'Explore' && <SearchIcon color={iconColor} />}
      {route.name === 'Notifications' && <BellIcon color={iconColor} />}
      {route.name === 'Messages' && <MailIcon color={iconColor} />}
    </View>
  );
}

/*

graph TD
  A[Auth Stack] --> B[Main Navigator]
  B --> C[Drawer Navigator]
  C --> D[Bottom Tabs]
  D --> E[Home]
  D --> F[Explore]
  D --> G[Notifications]
  D --> H[Messages]
  C --> I[Profile]
  C --> J[Settings]

*/