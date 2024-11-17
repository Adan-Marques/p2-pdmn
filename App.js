import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import catKey from './key.js';
import { useState } from 'react';

export default function App() {
  const [gato, setGatos] = useState([])

  const endPoint = "https://api.thecatapi.com/v1/images/search?api_key=";
  const apiKey = catKey;

  const obtemImagens = () => {
    const target = endPoint + apiKey;
    fetch(target)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imagesData = data;
        imagesData.map(function (imageData) {
          let image = `${imageData.url}`;
          console.log(image)
          setGatos(image)
        });
      })
  }


  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => obtemImagens()}>
        <Text
          style={styles.buttonText}>
          Gerar fotos de gatos
        </Text>
      </Pressable>
        <Image
          style={styles.image}
          source={{ uri: gato }}
        />
      <Text>{gato}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    //justifyContent: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 500,
    width: 500,
  }
});
