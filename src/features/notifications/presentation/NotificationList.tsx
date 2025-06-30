import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationPanel from '../../shared/organisms/Notifications/NotificationPanel/NotificationPanel';

export default function NotificationListScreen() {
  const dummyNotifications = [
    { id: '1', title: 'Nueva actualización', description: 'Revisa las nuevas mejoras de la app.' },
    { id: '2', title: 'Evento próximo', description: 'Tienes un evento programado para mañana.' },
    { id: '3', title: 'Recordatorio', description: 'No olvides contactar a Juan Pérez.' },
    { id: '4', title: 'Notificación general', description: 'Este es un aviso importante del sistema.' },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <NotificationPanel notifications={dummyNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eaf4fb', // Fondo azul claro
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
});
