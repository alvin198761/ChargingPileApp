import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {List, ListItem, Button} from 'react-native-elements';
import LabelTextInputListItem from "../../CustomComponents/LabelTextInputListItem/index";
import {ToastAndroidBS} from "../../Common/functions";

class CPAPersonalDataPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userProfile: [],
        };
    }

    componentDidMount() {
        this._getUserProfile();
    }

    // 查询用户个人信息
    _getUserProfile() {

    }

    _confirmModify = () => {
        ToastAndroidBS('修改成功');

        const {goBack} = this.props.navigation;
        goBack && goBack();
    };

    _onChangePwd = () => {
        const {navigate} = this.props.navigation;
        navigate && navigate('ChangePwd');
    };

    _renderItem = ({item}) => {
        return (
            <LabelTextInputListItem label={item.label}
                                    previousValue={item.val}
                                    containerStyle={styles.item}
            />
        );
    };

    render() {
        const data = [
            {key:2, label:'昵称', val:'alex'},
            {key:3, label:'性别', val:'男'},
        ];

        const list = [
            {
                title: '修改密码',
                icon: {name:'lock', type:'simple-line-icon'},
                callback: this._onChangePwd,
            },
        ];

        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <FlatList style={styles.flatList}
                              data={data}
                              renderItem={this._renderItem}
                    />

                    <List style={styles.list}>
                        {
                            list.map((item, i) => (
                                <ListItem key={i}
                                          title={item.title}
                                          leftIcon={item.icon}
                                          containerStyle={styles.item}
                                          onPress={() => item.callback && item.callback()}
                                />
                            ))
                        }
                    </List>
                </View>

                <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                            title="确认修改"
                            onPress={this._confirmModify}
                    />
                </View>
            </View>
        );
    }
}

export default CPAPersonalDataPage;