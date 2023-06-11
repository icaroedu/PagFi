import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const [name, setName] = useState('Admin');
  const [photo, setPhoto] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhotoChange = (text) => {
    setPhoto(text);
  };

  const handleLogout = () => {
    // Aqui você pode adicionar lógica para realizar o logout do administrador
    // Por exemplo, redirecionar para a tela de login
    console.log('Logout');
  };

  return (
    <SafeAreaView>
      <Text>Meu Perfil</Text>
      <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
      <Text>Nome:</Text>
      <TextInput value={name} onChangeText={handleNameChange} />
      <Text>Foto (URL):</Text>
      <TextInput value={photo} onChangeText={handlePhotoChange} />
      <Button title="Salvar" onPress={() => console.log('Salvar')} />
      <Button title="Sair" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
