import { Searchbar } from 'react-native-paper';
import React from 'react';
import { Platform, SafeAreaView, FlatList, View } from 'react-native';
import { RestaurantInfoCard } from '../restaurant-info-card-component';
import styled from 'styled-components';
import { SafeArea } from '../../../../safe-area';



const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 15,
    }
})``;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar
                placeholder="Search"
            />
        </SearchContainer>

        <RestaurantList
            data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16, }}
        />
    </SafeArea>



)
