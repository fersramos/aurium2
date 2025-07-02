import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="mod1" options={{headerShown: false}}/>
      <Stack.Screen name="missao" options={{headerShown: false}}/>
    </Stack>
  );
}
