import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import catKey from './key.js';
import { useState } from 'react';

export default function App() {
  const [gato, setGatos] = useState([])

  const endPoint = "https://api.thecatapi.com/v1/images/search?limit=5&api_key=";
  const apiKey = catKey;

  const obtemImagens = () => {
    const target = endPoint + apiKey;
    fetch(target)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGatos(gatosAtuais => [...data, ...gatosAtuais])
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
      <FlatList
        data={gato}
        renderItem={g => (
          <View>
            <Image
              style={styles.image}
              source={{ uri: g.item.url }}
            />
          </View>
        )} />
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
  },
  button: {
    width: '40%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
    marginBottom: 30
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 300,
    width: 300,
    marginVertical: 10,
    borderRadius: 10
  }
});
