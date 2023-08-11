import { Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Text, View } from '@/components/Themed';

export default function NewPostScreen() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();
  const router = useRouter();

  const onPost = () => {
    console.warn('Posting: ', content);

    router.push('/(tabs)/');
    setContent('');
    setImage(null);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <Pressable onPress={onPost} style={styles.postButton}>
        <Text style={styles.postButtonText}>Submit</Text>
      </Pressable>
      ),
    });
  }, [onPost]);

  return (
    <View style={styles.container}>
      <TextInput 
        value={content}
        onChangeText={setContent}
        placeholder='What do you want to talk about?' 
        style={styles.input} 
        multiline
      />

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.footer}>
        <Pressable onPress={pickImage} style={styles.iconButton}>
          <FontAwesome name="image" size={24} color="black"  />
        </Pressable>

        <Pressable style={styles.iconButton}>
          <FontAwesome name="camera" size={24} color="black"  />
        </Pressable>

        <Pressable style={styles.iconButton}>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 18,
  },
  image: {
    aspectRatio: 1,
    marginTop: 'auto',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  // header
  postButton: {
    backgroundColor: 'royalblue',
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  postButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  // footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: 'gainsboro',
    borderRadius: 100,
    padding: 15,
  },
});
