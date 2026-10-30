import React from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function AgendaPantalla() {
  const cuidados = [
    {
      id: "1",
      actividad: "Vacuna antirrábica",
      fecha: "15/11/2026",
    },
    {
      id: "2",
      actividad: "Control veterinario",
      fecha: "20/11/2026",
    },
    {
      id: "3",
      actividad: "Desparasitación",
      fecha: "05/12/2026",
    },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Agenda de cuidados</Text>
      <FlatList
        data={cuidados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text>{item.actividad}</Text>
            <Text>{item.fecha}</Text>
          </View>
        )}
      />
    </View>
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
