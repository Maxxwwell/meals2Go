import { Searchbar, Text, SafeAreaView } from 'react-native-paper';
import React from 'react';
import { RestaurantsScreen } from './src/components/features/restaurants/components/screens/restaurants-screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { View } from 'react-native';
import { SafeArea } from './src/components/safe-area';
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-menu",
  Map: "map",
  Settings: "settings",
}

const createscreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () =>
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>

const Map = () =>
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createscreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "grey",
            }}
          >
            <Tab.Screen name="Restaurants"
              component={RestaurantsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen name="Map"
              component={Map}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen name="Settings"
              component={Settings}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

      </ThemeProvider>

    </>

  );
}
