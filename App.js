import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default app

function app(){

  async function abrirCamera() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (permissao.granted) {
      await ImagePicker.launchCameraAsync();
    } else {
      alert("Acesso negado à câmera!");
    }
  }

  function alertaBotao(){
    alert("BEM VINDO")
  }

  return(
    <View style={estilos.tela}>
      <Text>Teste</Text>
      
      <Button title='CLIQUE AQUI' color={'green'} onPress={alertaBotao} />
      
      <Pressable style={estilos.botao} onPress={alertaBotao}>
        <Text style={estilos.textoBotao}>Clique aqui nesse jogo</Text>
      </Pressable>

      {/* Botão personalizado para abrir a câmera */}
      <Pressable style={estilos.botaoCamera} onPress={abrirCamera}>
        <Text style={estilos.textoBotaoCamera}>Abrir Câmera</Text>
      </Pressable>
    </View>
  )
}

const estilos = StyleSheet.create({
  tela:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  botao:{
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 10
  },
  textoBotao:{
    color: 'white'
  },
  botaoCamera:{
    borderRadius: 10,
    backgroundColor: '#007AFF',
    padding: 12
  },
  textoBotaoCamera:{
    color: 'white',
    fontWeight: 'bold'
  }
})