import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default teste

function certo() {
  Alert.alert('Acertou!')
}

function errado() {
  Alert.alert('Errou!')
}

function teste() {
  return (
    <View style={estilos.base}>
      <Text style={estilos.texto}>Qual é a capital do Brasil?</Text>

      <Button title='São Paulo' onPress={errado} />
      <Button title='Rio de Janeiro' onPress={errado} />
      <Button title='Brasília' onPress={certo} />
      <Button title='Salvador' onPress={errado} />
    </View>
  )
}

const estilos = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  texto: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
  }
})