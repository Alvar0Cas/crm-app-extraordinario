import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../atoms/Button/Button';

interface SettingsPanelProps {
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  calendarSyncEnabled: boolean;
  onToggleCalendarSync: () => void;
  onResetApp: () => void;
}

interface SettingOptionProps {
  label: string;
  iconName: string;
  value: boolean;
  onToggle: () => void;
}

function SettingOption({ label, iconName, value, onToggle }: SettingOptionProps) {
  return (
    <View style={styles.optionContainer}>
      <Icon name={iconName} size={24} color="#FFFFFF" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor={value ? '#007AFF' : '#CCCCCC'}
        trackColor={{ false: '#555555', true: '#007AFF' }}
        style={styles.switch}
      />
    </View>
  );
}

export default function SettingsPanel({
  notificationsEnabled,
  onToggleNotifications,
  calendarSyncEnabled,
  onToggleCalendarSync,
  onResetApp,
}: SettingsPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <SettingOption
        label="Notificaciones"
        iconName="notifications"
        value={notificationsEnabled}
        onToggle={onToggleNotifications}
      />

      <SettingOption
        label="Sincronizar calendario"
        iconName="calendar-today"
        value={calendarSyncEnabled}
        onToggle={onToggleCalendarSync}
      />

      <View style={styles.separator} />

      <Button onClick={onResetApp} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Restablecer aplicación</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
    backgroundColor: '#1E1E1E', //el contenedor mas pequeño 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 16,
  },
  resetButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 12,
  },
  icon: {
    marginRight: 4,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  switch: {
    marginLeft: 'auto', // para que no esté pegado al borde derecho
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});
