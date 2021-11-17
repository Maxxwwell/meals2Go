import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";


const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-family: ${(props) => props.theme.fonts.heading};
    
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[0]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
    padding: ${(props) => props.theme.sizes[0]};
`;

const Rating = styled(View)`
    padding-top: ${(props) => props.theme.sizes[0]};
    padding-bottom: ${(props) => props.theme.sizes[0]};
    flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = ['http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    const rattingCount = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {rattingCount.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <Address>{address}</Address>
            </Info>
            
        </RestaurantCard>
    );
};