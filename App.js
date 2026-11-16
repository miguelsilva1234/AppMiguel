import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [foto, setFoto] = useState(null);

  async function tirarFotoESalvar() {
    // 1. Permissão da câmera
    const permissaoCamera = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissaoCamera.granted) {
      Alert.alert('Permissão negada', 'Precisamos de acesso à câmera.');
      return;
    }

    // 2. Permissão da galeria (true = só escrita, funciona melhor no Expo Go)
    const permissaoGaleria = await MediaLibrary.requestPermissionsAsync(true);
    if (!permissaoGaleria.granted) {
      Alert.alert('Permissão negada', 'Precisamos de acesso à galeria para salvar a foto.');
      return;
    }

    // 3. Abre a câmera
    const resultado = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    // Usuário cancelou
    if (resultado.canceled) {
      return;
    }

    const uri = resultado.assets[0].uri;
    setFoto(uri);

    // 4. Salva a foto na galeria
    try {
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Sucesso', 'Foto salva na galeria!');
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível salvar a foto.');
      console.log(erro);
    }
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Câmera</Text>

      <Pressable style={estilos.botaoCamera} onPress={tirarFotoESalvar}>
        <Text style={estilos.textoBotaoCamera}>Abrir Câmera</Text>
      </Pressable>

      {foto && <Image source={{ uri: foto }} style={estilos.foto} />}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  botaoCamera: {
    borderRadius: 10,
    backgroundColor: '#007AFF',
    padding: 12,
  },
  textoBotaoCamera: {
    color: 'white',
    fontWeight: 'bold',
  },
  foto: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
});
