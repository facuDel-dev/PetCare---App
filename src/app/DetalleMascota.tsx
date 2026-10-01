import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MisMascotas } from "../constants/Mascotas";

export default function DetalleMascota() {
  const { id } = useLocalSearchParams();
  const mascota = MisMascotas.find((m) => m.id.toString() === id);

  if (!mascota) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mascota no encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: mascota.foto }} style={styles.image} />
      <Text style={styles.nombre}>{mascota.nombre}</Text>
      <Text style={styles.detalle}>
        {mascota.especie} · {mascota.raza}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍖 Alimentación</Text>
        <Text style={styles.text}>
          Consejos de comida según la raza y edad de tu mascota.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🐾 Hábitos</Text>
        <Text style={styles.text}>
          Rutinas de ejercicio, higiene y juegos recomendados.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎀 Accesorios</Text>
        <Text style={styles.text}>Cuidados del collar, cama y juguetes.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💉 Salud</Text>
        <Text style={styles.text}>
          Recordatorios de vacunas y visitas al veterinario.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  nombre: { fontSize: 26, fontWeight: "bold", textAlign: "center" },
  detalle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 5 },
  text: { fontSize: 14, color: "#444" },
});
