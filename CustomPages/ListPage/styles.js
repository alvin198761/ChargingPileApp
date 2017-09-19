import {StyleSheet} from 'react-native';
import colors from '../../Common/colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        marginTop: 1,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: colors.white,
    },
    map: {
        flex: 1,
    },
    item: {
        backgroundColor: colors.white,
    },
    separator: {
        height: 15,
    },
    bottomContainer: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        fontSize: 12,
        color: colors.grey3,
    }
});

export default styles;