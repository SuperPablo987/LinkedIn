import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

import { User } from '@/types';

type UserListItemProps = {
    user: User;
};

export default function UserListItem({ user }: UserListItemProps) {

    return (
        <Link href={`/users/${user.id}`} asChild>
        <Pressable style={styles.header}>
            <Image 
                source={{ uri: user.image }} 
                style={styles.userImage}
                />
            <View>
                <Text style={styles.userName}>{user.name}</Text>
                <Text>{user.position}</Text>

            </View>
        </Pressable>
    </Link>
    )
}

const styles = StyleSheet.create({
    // Header
    header: { 
        alignItems: 'center',
        flexDirection: 'row',
        padding:10,
    },
    userName:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userImage:{
        borderRadius: 50,
        height: 50,
        marginRight: 10,
        width: 50, 
    },     
})