import { Text, View, Image, StyleSheet } from 'react-native';

import { Experience } from '@/types';


type ExperienceListItemProps = {
    experience: Experience
}

export default function ExperienceListItem({
    experience,
}: ExperienceListItemProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: experience.companyImage }} style={styles.image}/>
            <View>
                <Text style={styles.title}>{experience.title}</Text>
                <Text>{experience.companyName}</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 10,
        marginBottom: 10,

    },
    image: {
        aspectRatio: 1,
        marginRight: 5,
        width: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
})