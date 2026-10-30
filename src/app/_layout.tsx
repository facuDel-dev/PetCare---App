import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="AgregarMascota"
        options={{ title: "Agregar Mascota" }}
      />
      <Stack.Screen
        name="DetalleMascota"
        options={{ title: "Detalles de Mascota" }}
      />
    </Stack>
  );
}
