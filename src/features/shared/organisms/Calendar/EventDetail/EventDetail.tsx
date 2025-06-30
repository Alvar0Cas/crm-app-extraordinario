import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../../../molecules/Profile/ProfileHeader';
import Text from '../../../atoms/Text/Text';
import { useNavigation } from '@react-navigation/native';
import { CalendarEvent } from '../../../../calendar/domain/entities/event';
import { ContactViewModel } from '../../../../contactos/presentation/viewmodel/ContactViewModel';

interface EventDetailViewProps {
  event: CalendarEvent;
}

export default function EventDetailView({ event }: EventDetailViewProps) {
  const navigation = useNavigation();
  const { fetchContactById, isLoading } = ContactViewModel();
  const [contactName, setContactName] = useState<string>('Cargando...');

  useEffect(() => {
    const loadContactName = async () => {
      if (event.contactId) {
        const contacto = await fetchContactById(event.contactId);
        setContactName(contacto?.name ?? 'No asignado');
      } else {
        setContactName('No asignado');
      }
    };
    loadContactName();
  }, [event.contactId]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ProfileHeader name={event.title} imageUri={''} onBack={handleBack} />

        <View style={styles.content}>
          <View style={styles.detailCard}>
            <Text style={styles.sectionTitle}>Información del Evento</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Fecha:</Text>
              <Text style={styles.detailValue}>{event.startDate.toLocaleDateString()}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Hora:</Text>
              <Text style={styles.detailValue}>
                {event.startDate.toLocaleTimeString()} - {event.endDate.toLocaleTimeString()}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Lugar:</Text>
              <Text style={styles.detailValue}>{event.location || 'Sin lugar'}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Notas:</Text>
              <Text style={styles.detailValue}>{event.notes || 'Sin notas'}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Contacto:</Text>
              <Text style={styles.detailValue}>{isLoading ? 'Cargando...' : contactName}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E', // Fondo oscuro
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fondo oscuro
  },
  content: {
    padding: 20,
    gap: 16,
  },
  detailCard: {
    backgroundColor: '#1E1E1E', // Tarjeta gris oscuro
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borde blanco
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF', // Texto blanco
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#1E1E1E', // Fondo gris medio
    paddingVertical: 8,
    borderRadius: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: '#FFFFFF', // Texto blanco
    width: '40%',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // Texto blanco
    width: '60%',
    textAlign: 'right',
  },
  
});
