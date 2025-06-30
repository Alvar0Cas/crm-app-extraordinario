import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Dashboard from '../../shared/organisms/Dashboard/Dashboard';
import { CalendarViewModel } from '../../calendar/presentation/viewmodel/CalendarViewModel';
import { ContactViewModel } from '../../contactos/presentation/viewmodel/ContactViewModel';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavProp } from '../../../navigation/types/Drawer';

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function HomeScreen() {
  const navigation = useNavigation<DrawerNavProp>();

  const { events, fetchEvents } = CalendarViewModel();
  const { contacts, fetchContacts } = ContactViewModel();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      await Promise.all([fetchEvents(), fetchContacts()]);
      setLoading(false);
    }
    loadData();
  }, []);

  // contactos aleatorios para simular "más usados"
  const contactsForDashboard = getRandomItems(contacts, 3).map(contact => ({
    name: contact.name,
    imageUri: contact.imageUri,
    onPress: () => console.log(`Ver ${contact.name}`),
  }));

  // Próximos 5 eventos ordenados por fecha de inicio
  const upcomingEvents = events
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 5)
    .map(event => ({
      title: event.title,
      date: new Date(event.startDate).toLocaleDateString(),
      onPress: () => console.log(`Ver evento ${event.title}`),
    }));

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <Dashboard
          contacts={contactsForDashboard}
          events={upcomingEvents}
          notifications={[]}
          onNavigateContacts={() => navigation.navigate('contactsMain')}
          onNavigateCalendar={() => navigation.navigate('calendarMain')}
          onNavigateNotifications={() => navigation.navigate('notificationsMain')}
          onNavigateSettings={() => navigation.navigate('settingsMain')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#fffff', 
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // contenedor 3d sombreado
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
});
