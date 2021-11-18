import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { RestaurantCardCover, RestaurantCard, Address, Title, Info, Rating, Opened, Icons, Icon } from "./restaurant-info-card-styles";
import { HorizontalSpaceMedium } from "../../../restaurant-info-card-spacing";

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = ['http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const rattingCount = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>

            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

            <Info>
                <Title>{name}</Title>

                <Icons>
                    <Rating>
                        {rattingCount.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <HorizontalSpaceMedium />
                    {
                        isClosedTemporarily && (
                            <Text variant="error" style={{ color: "red" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )
                    }
                    <Opened>
                        {isOpenNow && <SvgXml xml={open} width={40} height={30} />}
                    </Opened>
                    <Icon source={{ uri: icon }} />


                </Icons>
                <Address>{address}</Address>
            </Info>

        </RestaurantCard>
    );
};