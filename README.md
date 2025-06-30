# crm-app-EXTRA
CRM personal para móviles
# App de Calendario con Notificaciones en React Native

Este proyecto es una aplicación de calendario desarrollada con React Native utilizando Expo. Permite crear, visualizar y gestionar eventos, y envía notificaciones locales como recordatorios.

## Funcionalidades

- Agregar eventos con título, ubicación, notas, fechas de inicio y fin, y contacto relacionado.
- Selección de contactos desde la agenda del dispositivo.
- Programación de notificaciones locales para recordar eventos.
- Soporte para edición y eliminación de eventos existentes.
- Manejo de permisos para acceder a notificaciones y contactos.

## Tecnologías utilizadas

- *React Native*
- *Expo*
- *expo-notifications*
- *expo-contacts*
- *expo-sqlite*
- *react-native-modal-datetime-picker*
- *react-native-dropdown-picker*
- *react-native-safe-area-context*
- *react-navigation*

## Arquitectura

El proyecto sigue una arquitectura basada en Feature-First combinada con los principios de *MVVM* y *Clean Architecture*. Se separa claramente la lógica de presentación, dominio y datos.

## Instalación

1. Clona este repositorio:

bash
git clone [https://github.com/Alvar0Cas/crm-app-extraordinario.git]


2. Instala las dependencias:

bash
npm install


3. Ejecuta el proyecto en un dispositivo o simulador:

bash
npx expo start


## Uso

- Pulsa el botón "Nuevo +" para crear un evento.
- Completa el formulario y selecciona un contacto.
- Se programará automáticamente una notificación local para la fecha de inicio del evento.
- Puedes editar o eliminar un evento desde el modal correspondiente.

## Consideraciones

- Las notificaciones locales requieren permisos del sistema. La app los solicita automáticamente al iniciar.
- En dispositivos iOS, las notificaciones repetitivas requieren intervalos mínimos de 60 segundos.
- El contacto seleccionado no se guarda en la agenda del dispositivo, solo se usa como referencia del evento.

## Estructura del proyecto

- calendar/ – Lógica de manejo de eventos.
- notifications/ – Servicios y modelos para notificaciones.
- contactos/ – Lógica de acceso y manejo de contactos.
- shared/ – Componentes reutilizables como el formulario de eventos.