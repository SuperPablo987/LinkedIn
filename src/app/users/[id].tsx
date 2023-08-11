import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useState, useLayoutEffect } from 'react';

import userJson from '../../../assets/data/user.json';
import { User } from '@/types';

export default function UserProfile(){
    const [user, setUser] = useState<User>(userJson);

    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const onConnect = () => {
        console.warn('Connect Pressed');
    };

    useLayoutEffect(() => {
        navigation.setOptions({ title: user.name });
    }, [user?.name]);

    

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* BG Image */}
                <Image source={{ uri: user.backImage}} style={styles.backImage} />

                <View style={styles.headerContent}>

                {/* Profile Image */}
                <Image source={{ uri: user.image}} style={styles.image} />

                {/* Name and position */}
                <Text style={styles.name}>{user.name}</Text>
                <Text>{user.position}</Text>

                {/* Connect button  */}
                <Pressable onPress={onConnect} style={styles.button}>
                    <Text style={styles.buttonText}>Connect</Text>
                </Pressable>
                </View>
            </View>

            {/* About */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.paragraph}>{user.about}</Text>
            </View>

            {/* Experience */}
        </View>
    
    )
}

const styles = StyleSheet.create({
    backImage:{
        aspectRatio: 5/2,
        marginBottom: -60,
        width: '100%',
    },
    button:{
        alignItems: 'center',
        backgroundColor: 'royalblue',
        borderRadius: 50,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
    container:{},
    header:{
        backgroundColor: 'white',
    },
    headerContent:{
        padding: 10,
        paddingTop: 0,
    },
    image:{
        aspectRatio: 1,
        borderColor: 'white',
        borderRadius: 60,
        borderWidth: 3,
        width: 120,
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
    },
    paragraph: {
        lineHeight: 20,
    },
    section:{
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 5,
    },
})