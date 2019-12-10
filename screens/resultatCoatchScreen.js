import React from 'react';
import {
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    ExpoLinksView
} from '@expo/samples';

export default function resultatCoatchScreen() {
    return (
        < ScrollView style={styles.container} >
            <ExpoLinksView />
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});