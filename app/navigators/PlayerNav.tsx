import Chapters from '@app/screens/Home/Scenes/Chapters';
import ContinueLearn from '@app/screens/Home/Scenes/ContinueLearn';
import Video from '@app/screens/Home/Scenes/Video';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type AuthNavigatorParamList = {
    Chapters: undefined;
    Video: undefined;
    ContinueLearn: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const PlayerNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Chapters"
        >
            <Stack.Screen name="Chapters" component={Chapters} />
            <Stack.Screen name="Video" component={Video} />
            <Stack.Screen name="ContinueLearn" component={ContinueLearn} />
        </Stack.Navigator>
    );
};
