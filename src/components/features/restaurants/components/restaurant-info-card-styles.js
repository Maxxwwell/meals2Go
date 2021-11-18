import styled from "styled-components";
import { Card } from "react-native-paper";
import { Text, View, Image } from "react-native";


export const Title = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.body};
font-family: ${(props) => props.theme.fonts.heading};
color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[1]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.caption};
font-family: ${(props) => props.theme.fonts.body};
`;

export const Info = styled(View)`
    padding: ${(props) => props.theme.sizes[0]};
`;

export const Rating = styled(View)`
    padding-top: ${(props) => props.theme.sizes[0]};
    padding-bottom: ${(props) => props.theme.sizes[0]};
    flex-direction: row;
`;

export const Opened = styled(View)`
    padding-right: ${(props) => props.theme.sizes[0]};
`;

export const Icons = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding-right: ${(props) => props.theme.sizes[0]};
`;

export const Icon = styled(Image)`
    width: 20px;
    height: 20px;
    
`;