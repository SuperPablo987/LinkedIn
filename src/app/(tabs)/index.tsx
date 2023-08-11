import { StyleSheet, FlatList } from 'react-native';

import PostListItem from '@/components/PostListItem';
import posts from '../../../assets/data/posts.json';


export default function HomeFeedScreen() {
  return (
    <FlatList 
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      // keyExtractor={(post) => post._id} // only necessary if we do not have an id field
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 5 }}
    />
  );
}


