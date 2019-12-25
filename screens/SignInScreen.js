import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default function SignInScreen() {
    return (

        < View style={styles.container} >
            <TouchableOpacity onPress={() => console.log("olo")}>
                <Image
                    style={styles.button}
                    source={
                        {
                            uri: 'https://img.utdstc.com/icons/facebook-android.png:s',
                        }}

                />
                <Text>sign in with</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("olo")}>
                <Image
                    style={styles.button}
                    source={
                        {
                            uri: 'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/12/google-g-logo.jpg',
                        }}
                />
                <Text>sign in with</Text>
            </TouchableOpacity>


        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    button: {
        width: 50,
        height: 50
    }
});