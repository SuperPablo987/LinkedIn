import { StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';

import PostListItem from '@/components/PostListItem';
// import posts from '../../../assets/data/posts.json';
import { gql, useQuery } from '@apollo/client';

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
      profile {
        id
        name
        position
        image
      }
    }
  }
`;


export default function HomeFeedScreen() {
  const {loading, error, data} = useQuery(postList);

  if(loading){
    return <ActivityIndicator />;
  }

  if (error){
    console.log(error);
    return <Text>Something went Wrong</Text>;
  }


  return (
    <FlatList 
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      // keyExtractor={(post) => post._id} // only necessary if we do not have an id field
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 5 }}
    />
  );
}


