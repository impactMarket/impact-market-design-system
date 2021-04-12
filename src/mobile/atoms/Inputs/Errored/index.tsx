import React, { Component } from 'react';
import {
    TextInput,
    Text,
    TextInputProps,
    View,
    StyleSheet,
} from 'react-native';

import { ipctColors } from '../../../styles/index';

interface IInputProps extends TextInputProps {
    label?: string;
    isBig?: boolean;
    hasError?: boolean;
}
export default class Input extends Component<IInputProps, object> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            label,
            value,
            maxLength,
            onEndEditing,
            onChangeText,
            editable,
            placeholder,
            isBig,
            hasError,
            style,
            multiline,
            numberOfLines,
        } = this.props;

        return (
            <View
                style={[
                    style,
                    {
                        width: '100%',
                        height: 48,
                    },
                ]}
            >
                <View style={[{borderColor: hasError ? ipctColors.error : ipctColors.inputBorder}, styles.outline]}>
                    <Text style={[{  color: hasError ? ipctColors.error : ipctColors.regentGray}, styles.label]}>{label}</Text>
                    <TextInput
                        style={styles.textInput}
                        value={value}
                        maxLength={maxLength}
                        onEndEditing={onEndEditing}
                        onChangeText={onChangeText}
                        editable={editable}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        placeholder={placeholder}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outline: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        paddingHorizontal: 16,
        paddingBottom: 12,
        borderRadius: 6,
        borderWidth: 0.5,
    },
    //TODO: add font inter
    textInput: {
        flexGrow: 1,
        margin: 0,
        zIndex: 1,
        fontSize: 15,
        lineHeight: 24,
        color: ipctColors.almostBlack,
    },
    label: {
        position: 'absolute',
        left: 12,
        top: -8,
        paddingHorizontal: 4,
        backgroundColor: '#FFFFFF',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 17,
        letterSpacing: 0.245455,
    },
});
