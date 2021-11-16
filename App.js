import { Searchbar } from 'react-native-paper';
import React from 'react';
import { RestaurantsScreen } from './src/components/features/restaurants/components/screens/restaurants-screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';


export default function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
    <RestaurantsScreen />
    </ThemeProvider>
      
    </>

  );
}
