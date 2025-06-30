import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNotificationsParamsList } from '../../../navigation/Notifications/types/types';
import NotificationDetailView from '../../shared/organisms/Notifications/NotifiactionDetailView/NotificationDetailView';

type NotificationDetailRouteProp = RouteProp<StackNotificationsParamsList, 'notificationDetail'>;

export default function NotificationDetailScreen() {
  const route = useRoute<NotificationDetailRouteProp>();
  const { id } = route.params;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <NotificationDetailView notificationId={id} />
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
