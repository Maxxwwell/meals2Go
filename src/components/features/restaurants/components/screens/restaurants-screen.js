import { Searchbar } from 'react-native-paper';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RestaurantInfoCard } from '../restaurant-info-card-component';
import styled from 'styled-components';

const isAndroid = Platform.OS === 'android';

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[2]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.accentColor};
`;

export const RestaurantsScreen = () => (
    <SafeAreaView
        style={{
            flex: 1,
            marginTop: isAndroid ? 25 : 2,
            backgroundColor: '#eeeeee'
        }}>

        <SearchContainer>
            <Searchbar
                placeholder="Search"
            />
        </SearchContainer>

        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>



    </SafeAreaView>
);

