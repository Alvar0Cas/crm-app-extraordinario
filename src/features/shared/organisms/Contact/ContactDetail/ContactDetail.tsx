import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileHeader from '../../../molecules/Profile/ProfileHeader';
import Button from '../../../atoms/Button/Button';
import Text from '../../../atoms/Text/Text';
import { Contact } from '../../../../contactos/domain/entities/contact';

interface ContactDetailViewProps {
  contact: Contact;
}

export default function ContactDetailView({ contact }: ContactDetailViewProps) {
  const navigation = useNavigation();
  
  const handleScheduleReminder = () => {
    Alert.alert('Recordatorio', 'Recordatorio agendado (dummy)');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader name={contact.name} imageUri={contact.imageUri} onBack={handleBack} />

      <View style={styles.section}>
        <Text style={styles.label}>Nombre completo:</Text>
        <Text style={styles.value}>{contact.name}</Text>

        <Text style={styles.label}>Primer Nombre:</Text>
        <Text style={styles.value}>{contact.firstName}</Text>

        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.value}>{contact.lastName}</Text>

        <Text style={styles.label}>Tipo de Contacto:</Text>
        <Text style={styles.value}>{contact.contactType}</Text>

        <Text style={styles.label}>Es favorito:</Text>
        <Text style={styles.value}>{contact.isFavorite ? '❤️' : '🤍'}</Text>
      </View>

      <Button onClick={handleScheduleReminder} style={styles.button}>
        <Text style={styles.buttonText}>Agendar recordatorio</Text>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E1E1E', // Fondo oscuro
    gap: 24,
  },
  section: {
    backgroundColor: '#1E1E1E', // Tarjeta gris oscuro
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    gap: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borde blanco opcional
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF', // Texto blanco
  },
  value: {
    fontSize: 16,
    color: '#DDDDDD', // Texto gris claro
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
