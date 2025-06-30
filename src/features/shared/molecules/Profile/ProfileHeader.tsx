import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from '../../atoms/Avatar/Avatar';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { ProfileHeaderProps } from './types/types';

export default function ProfileHeader({ name, imageUri, onBack }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      
      {onBack && (
        <View style={styles.backButtonContainer}>
          <Button onClick={onBack}>
            <Text style={styles.backText}>Volver</Text>
          </Button>
        </View>
      )}

      <View style={styles.centerContent}>
        <Avatar imageUri={imageUri} initials={name[0]} size={60} />
        <Text style={styles.name}>{name}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButtonContainer: {
    alignItems: 'flex-end',
  },
  centerContent: {
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backText: {
    color: 'white', // texto blanco para "Volver"
    fontWeight: 'bold',
  },
});
