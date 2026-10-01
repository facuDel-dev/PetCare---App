import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function AgendaPantalla() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Agenda de cuidados</Text>

      <View style={styles.item}>
        <Text style={styles.text}>
          Firulais - Vacuna antirrábica - 15/09/2026
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Michi - Desparasitación - 20/09/2026</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>
          Michi - Visita al veterinario - 01/10/2026
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  item: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: { fontSize: 16, color: "#333" },
});
