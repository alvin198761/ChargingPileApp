import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';
import {Button, Avatar} from 'react-native-elements';
import {GPlaceholderTextColor} from "../../Common/colors";
import {ScTextInput} from "../../CustomComponents/SimpleCustomComponent/index";

class CPALoginPage extends Component{
    _onPress = () => {
        ToastAndroid.show('登录失败！',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM);

        const {goBack} = this.props.navigation;
        goBack && goBack();
    };

    _forgotPwd = () => {
        ToastAndroid.show('忘记密码，好开心，😫！',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM);

        const {navigate} = this.props.navigation;
        navigate && navigate('Reset', {registerOrReset: 'reset'});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar large
                                rounded
                                icon={{name:'user', type:'simple-line-icon', color:'yellow'}}
                                activeOpacity={0.7}
                        />
                    </View>

                    <ScTextInput placeholderTextColor={GPlaceholderTextColor}
                               placeholder='用户名'
                               style={styles.textInput}
                               underlineColorAndroid='transparent'
                    />
                    <ScTextInput placeholder='密码'
                               placeholderTextColor={GPlaceholderTextColor}
                               secureTextEntry={true}
                               style={styles.textInput}
                               underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.button}
                            title="登录"
                            onPress={this._onPress}
                    />

                    <TouchableOpacity>
                        <Text textDecorationLine="underline"
                              style={styles.text}
                              onPress={this._forgotPwd}
                        >
                            忘记密码?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CPALoginPage;