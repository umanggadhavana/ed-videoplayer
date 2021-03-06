import { SIZES } from '@app/theme/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: SIZES.width * 0.5,
        height: SIZES.width * 0.7,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        marginVertical: 16,
        marginLeft: 16,
    },
    upperImageContainer: {
        height: SIZES.width * 0.5,
        backgroundColor: '#80BD03',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerContainer: {
        height: SIZES.width * 0.2,
        backgroundColor: '#FCFCFC',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    progressBar: { height: 6 },
    textContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { color: '#404B63', fontWeight: 'bold', fontSize: 16 },
});
