import styled from "styled-components";
import { View } from "react-native";


export const HorizontalSpaceTiny = styled(View)`
flex-direction: row;
padding-right: ${(props) => props.theme.sizes[1]};
`;

export const HorizontalSpaceSmall = styled(View)`
flex-direction: row;
padding-right: ${(props) => props.theme.sizes[2]};
`;

export const HorizontalSpaceMedium = styled(View)`
flex-direction: row;
padding-right: ${(props) => props.theme.sizes[3]};
`;

export const HorizontalSpaceLarge = styled(View)`
flex-direction: row;
padding-right: ${(props) => props.theme.sizes[4]};
`;
