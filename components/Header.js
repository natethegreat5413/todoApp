import React from "react";
import { View, Text } from "react-native";

// styled components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors,
} from "../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
    return (
        <HeaderView>
            <HeaderTitle>Todos</HeaderTitle>
            <HeaderButton onPress={handleClearTodos}>
                <Entypo name="trash" size={35} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    );
};

export default Header;
