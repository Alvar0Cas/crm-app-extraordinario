import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackContactParamList } from '../../../navigation/Contact/types/types';
import ContactDetailView from '../../shared/organisms/Contact/ContactDetail/ContactDetail';
import { ContactViewModel } from './viewmodel/ContactViewModel';

type ContactDetailRouteProp = RouteProp<StackContactParamList , 'contactDetail'>;

export default function ContactDetailScreen() {
  const route = useRoute<ContactDetailRouteProp>();
  const { id } = route.params;

  const {
    fetchContactById,
    selectedContact,
    isLoading,
    error,
  } = ContactViewModel();

  useEffect(() => {
    fetchContactById(id);
  }, [id]);

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

  if (!selectedContact) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Contacto no encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ContactDetailView contact={selectedContact} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFF', // Fondo oscuro
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Contenedor gris oscuro 3D SOMBREADOOO
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borde blanco
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

});
