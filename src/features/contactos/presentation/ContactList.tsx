import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import ContactList from '../../shared/organisms/Contact/ContactList/ContactList';
import { ContactViewModel } from './viewmodel/ContactViewModel';

export default function ContactListScreen() {
  const {
    contacts,
    isLoading,
    error,
    fetchContacts,
  } = ContactViewModel();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ContactList contacts={contacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFF', // LOS SCREEN SON LOS QUE ESTAN DEBAJO DEL CONTENEDOR 3D
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Gris oscuro para el contenedor
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borde blanco sutil
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30', // Rojo Apple para errores
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
