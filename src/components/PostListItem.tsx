import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Link } from 'expo-router';

import { Post } from '@/types';

type PostListItemProps = {
    post: Post;
};

type FooterButtonProp = {
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
  };

function FooterButton({ text, icon }:FooterButtonProp) {
    return (
        <View style={{ flexDirection: 'row'}}>
            <FontAwesome name={icon} size={16} color="gray" />
            <Text style={{ marginLeft: 5, color: 'gray', fontWeight: 500 }}>
                {text}
            </Text>
        </View>
    )
}

export default function PostListItem({ post }: PostListItemProps) {
    return (
        <Link href={`/posts/${post.id}`} asChild>
            <Pressable style={styles.container}>
                
                {/* Header */}
                <Link href={`/users/${post.profile.id}`} asChild>
                    <Pressable style={styles.header}>
                        <Image 
                            source={{ uri: post.profile.image }} 
                            style={styles.userImage}
                            />
                        <View>
                            <Text style={styles.userName}>{post.profile.name}</Text>
                            <Text>{post.profile.position}</Text>

                        </View>
                    </Pressable>
                </Link>

                {/* Text Content */}
                <Text style={styles.content}>{post.content}</Text>

                {/* Image content */}
                {post.image && (
                    <Image source={{ uri: post.image }} style={styles.postImage}/>
                    )}

                {/* Footer */}
                <View style={styles.footer}>
                    <FooterButton text="Like" icon="thumbs-o-up" />
                    <FooterButton text="Comment" icon="comment-o" />
                    <FooterButton text="Share" icon="share" />
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: 'white',
        maxWidth: 500,
        width: '100%',
    },
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
    // Body
    content:{
        margin: 10,
        marginTop: 0,
    },
    postImage:{
        aspectRatio: 1,
        width: '100%',
    },
    // Footer
    footer: {
        borderColor: 'lightgray',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
});