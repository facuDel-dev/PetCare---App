import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "PetCare-App" }} />
      <Stack.Screen
        name="AgendaPantalla"
        options={{ title: "Agenda de Cuidados" }}
      />
      <Stack.Screen
        name="DetalleMascota"
        options={{ title: "Detalles de Mascota" }}
      />
    </Stack>
  );
}
