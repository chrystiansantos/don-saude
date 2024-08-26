import { Tabs } from 'expo-router'
import {
  CalendarBlank,
  House,
  MagnifyingGlass,
  User,
  Windmill,
} from 'phosphor-react-native'

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#475467',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 5,
          borderRadius: 26,
          height: 72,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          gap: 26,
        },
        tabBarItemStyle: {
          height: 56,
          width: 56,
          borderRadius: 20,
          margin: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <House weight={focused ? 'fill' : 'thin'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <MagnifyingGlass
              weight={focused ? 'bold' : 'thin'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scheduler"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, focused }) => (
            <CalendarBlank
              weight={focused ? 'bold' : 'thin'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wind"
        options={{
          title: 'Plus',
          tabBarIcon: ({ color, focused }) => (
            <Windmill
              weight={focused ? 'fill' : 'thin'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color, focused }) => (
            <User weight={focused ? 'bold' : 'thin'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
