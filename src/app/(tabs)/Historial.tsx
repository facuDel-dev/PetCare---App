import { View, Text, FlatList } from "react-native";

export default function HistorialScreen() {
  const historial = [
    {
      id: "1",
      detalle: "Vacunación anual",
      fecha: "10/03/2026",
    },
    {
      id: "2",
      detalle: "Consulta veterinaria",
      fecha: "15/05/2026",
    },
  ];

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f2f2f2",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.detalle}
            </Text>
            <Text style={{ fontSize: 14, color: "#555", marginTop: 4 }}>
              {item.fecha}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
