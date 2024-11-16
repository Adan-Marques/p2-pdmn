import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
//import catKey from '../../a/key.js';



/* const endPoint = "https://api.thecatapi.com/v1/images/search?api_key=";
const apiKey = catKey;
const obtemImagens = () => {
  const target = endPoint + apiKey;
  fetch(target)
    .then((dados) => {
    });
} */

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={alert("a")}>
        <Text
          style={styles.buttonText}>
          Gerar fotos de gatos
        </Text>
      </Pressable>
      {/* <FlatList
         keyExtractor={item => item.id!}
         //style={styles.list}
         data={lembretes}
         renderItem={l => (
           <View
             style={styles.listItem}>
           </View>
         )}
      /> */}
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
});
