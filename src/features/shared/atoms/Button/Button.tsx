import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonProps } from './types/type';

const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    gap: 8,
    backgroundColor: '#007AFF',  // azul vivo consistente con la app
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
