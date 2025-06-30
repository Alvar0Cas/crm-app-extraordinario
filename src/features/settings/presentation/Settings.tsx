import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SettingsPanel from '../../shared/organisms/SettingsPanel/SettingsPanel';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [calendarSyncEnabled, setCalendarSyncEnabled] = useState(false);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  const handleToggleCalendarSync = () => {
    setCalendarSyncEnabled(prev => !prev);
  };

  const handleResetApp = () => {
    console.warn('App restablecida');
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <SettingsPanel
          notificationsEnabled={notificationsEnabled}
          onToggleNotifications={handleToggleNotifications}
          calendarSyncEnabled={calendarSyncEnabled}
          onToggleCalendarSync={handleToggleCalendarSync}
          onResetApp={handleResetApp}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#FFFFF', // FONDO QUE VA DEBAJO DEL CONTENEDOR 3D SOMBREADO
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fondo blanco. CAMBIO DE COLOR CONTENEDOR 3D SOMBREADO
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
});
