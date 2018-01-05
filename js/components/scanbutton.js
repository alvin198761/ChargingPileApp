'use strict';

import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Platform} from 'react-native';
import {IOSPlatform, ActiveOpacity} from "../common/constants";
import colors from "../common/colors";
import {Icon} from 'react-native-elements';
import {IconType} from "../common/icons";
import PropTypes from 'prop-types';
import {shadowStyle} from "../common/styles";

class ScanButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.topContainer, shadowStyle, this.props.containerStyle]}>
                    <TouchableOpacity onPress={this.props.onScan}
                                      onLongPress={this.props.onScan}
                                      style={[styles.button, this.props.btnStyle]}
                                      activeOpacity={ActiveOpacity}>
                        {
                            this.props.icon
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.text}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

export default ScanButton;

ScanButton.PropTypes = {
    onScan: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    containerStyle: PropTypes.object.isRequired,
    btnStyle: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
};

ScanButton.defaultProps = {
    title: '扫码充电',
    icon: <Icon type={IconType.Ionicon} name='md-qr-scanner' size={35} color={colors.white}/>,
};

const Size = 25;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: Size * 3 / 2,
        height: Size * 3,
        width: Size * 3,
    },
    button: {
        borderRadius: Size * 3 / 2,
        height: Size * 3,
        width: Size * 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.tintColor2,
    },
    bottomContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        alignItems: 'center',
        marginTop: 10,
    },
});