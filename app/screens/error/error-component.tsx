import React, { ErrorInfo } from 'react';
import { ImageStyle, ScrollView, TextStyle, View, ViewStyle } from 'react-native';
import { Button, Icon, Text } from '../../components';
import { COLORS } from '../../theme';

const CONTAINER: ViewStyle = {
    alignItems: 'center',
    flex: 1,
    padding: 16,
    paddingVertical: 50,
    backgroundColor: COLORS.background,
};

const ERROR_DETAILS_CONTAINER: ViewStyle = {
    width: '100%',
    maxHeight: '60%',
    backgroundColor: COLORS.line,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderRadius: 6,
};

const BTN_RESET: ViewStyle = {
    paddingHorizontal: 40,

    backgroundColor: COLORS.primary,
};

const TITLE_ERROR: TextStyle = {
    color: COLORS.error,
    fontWeight: 'bold',
    paddingVertical: 15,
};

const FRIENDLY_SUBTITLE: TextStyle = {
    color: COLORS.black,
    fontWeight: 'normal',
    paddingVertical: 15,
};

const CONTENT_ERROR: TextStyle = {
    color: COLORS.error,
    fontWeight: 'bold',
    paddingVertical: 15,
};

// Uncomment this and the Text component in the ErrorComponent if
// you want to see a backtrace in your error reporting screen.
// const CONTENT_BACKTRACE: TextStyle = {
//   color: color.dim,
// }

const ICON: ImageStyle = {
    marginTop: 30,
    width: 64,
    height: 64,
};

export interface ErrorComponentProps {
    error: Error;
    errorInfo: ErrorInfo;
    onReset(): void;
}

/**
 * Describe your component here
 */
export const ErrorComponent = (props: ErrorComponentProps) => {
    return (
        <View style={CONTAINER}>
            <Icon style={ICON} icon="bug" />
            <Text style={TITLE_ERROR} />
            <Text style={FRIENDLY_SUBTITLE} />
            <View style={ERROR_DETAILS_CONTAINER}>
                <ScrollView>
                    <Text selectable style={CONTENT_ERROR} text={`${props.error}`} />
                    {/* <Text selectable style={CONTENT_BACKTRACE} text={`${props.errorInfo.componentStack}`} /> */}
                </ScrollView>
            </View>
            <Button style={BTN_RESET} onPress={props.onReset} />
        </View>
    );
};
