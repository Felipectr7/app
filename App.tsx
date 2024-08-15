import { StatusBar } from 'expo-status-bar';
import { Navigation } from './scr/navigations';
import { AuthProvider } from './scr/context/auth';
import React from 'react';

export default function App() {
  return (
    <>
    <AuthProvider>
    <Navigation />
    </AuthProvider>
    <StatusBar style="auto"/>
    </>
  );
}